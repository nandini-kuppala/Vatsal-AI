from crewai import Agent, Task, Crew, Process, LLM
from crewai_tools import SerperDevTool
from dotenv import load_dotenv
from paddleocr import PaddleOCR
import os
import json
from PIL import Image
import pdfplumber
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import os
import gtts
from playsound import playsound
from googletrans import Translator
import asyncio

async def text_to_speech(text1):
    languages = {
        "1": ("hi", "Hindi"),
        "2": ("ta", "Tamil"),
        "3": ("te", "Telugu"),
        "4": ("kn", "Kannada"),
        "5": ("ml", "Malayalam"),
        "6": ("gu", "Gujarati"),
        "7": ("mr", "Marathi"),
        "8": ("bn", "Bengali"),
        "9": ("pa", "Punjabi")
    }
    
    print("Choose the output language:")
    for key, value in languages.items():
        print(f"{key}. {value[1]}")
    
    choice = input("Enter the number corresponding to your language: ")
    
    if choice not in languages:
        print("Invalid choice. Defaulting to Hindi.")
        lang_code = "hi"
    else:
        lang_code = languages[choice][0]
    
    
  

    translator = Translator()
    translated_text = await translator.translate(text1, dest=lang_code)
    translated_text = translated_text.text
    print(translated_text)

    


load_dotenv()
os.environ['SERPER_API_KEY'] = "6f2227a931b482b6e1b21298ecc47bb6865beb28"

llm = LLM(
    model="gemini/gemini-1.5-flash",
    temperature=0.7,
    api_key="AIzaSyBNOQJ3D5xVYeKt7xokZlQ-zXZrKwGgspE"

)


serper_tool = SerperDevTool()

data_interpreter_agent = Agent(
    role="Medical Data Interpreter",
    goal="Accurately interpret and structure medical report data{report_text}",
    backstory="""Expert in medical laboratory data interpretation with extensive 
    experience in analyzing unstructured medical reports. Specializes in identifying 
    test parameters, values, and reference ranges.""",
    tools=[serper_tool],
    verbose=True,
    llm=llm
)

health_analyst_agent = Agent(
    role="Health Insights Analyst",
    goal="Analyze medical data to identify health implications{report_text}",
    backstory="""Clinical pathologist with expertise in interpreting laboratory 
    results and their implications for patient health. Specializes in connecting 
    test results to potential health conditions.""",
    tools=[serper_tool],
    verbose=True,
    llm=llm
)

action_insight_agent = Agent(
    role="Healthcare Action Specialist",
    goal="Develop actionable recommendations based on health insights{report_text}",
    backstory="""Healthcare consultant specializing in preventive medicine and 
    lifestyle modifications. Expert in creating practical health improvement plans 
    based on laboratory findings.""",
    tools=[serper_tool],
    verbose=True,
    llm=llm
)

report_compiler_agent = Agent(
    role="Medical Communication Specialist{report_text} also this is the past user report and data analyse this and have another column to corelate with this and provide information accordingly{past_report}",
    goal="Create user-friendly, comprehensive health reports",
    backstory="""Health communication expert specializing in translating complex 
    medical information into simple, actionable insights. Experienced in creating 
    reports for diverse audiences including elderly and non-medical readers.""",
    tools=[serper_tool],
    verbose=True,
    llm=llm
)

interpretation_task = Task(
    description="""
    {report_text}1. Analyze the unstructured medical report text
    2. Identify and categorize all test parameters:
       - Test names and categories
       - Result values and units
       - Reference ranges
       - Abnormal values
    3. Structure the data into clear categories
    4. Create trend analysis if historical data available
    5. Flag critical values requiring immediate attention
    """,
    expected_output="""
    Provide structured analysis of the medical report:

    Test Categories:
    - Complete list of test categories found
    - Key parameters within each category
    
    Results Analysis:
    - Normal results with their values
    - Abnormal results with deviation details
    - Critical values requiring attention
    
    Data Quality:
    - Missing or incomplete information
    - Unclear or ambiguous results
    - Data reliability assessment
    
    Historical Comparison:
    - Trends in test results (if available)
    - Changes from previous tests
    - Long-term patterns
    
    Technical Notes:
    - Testing methodology used
    - Any limiting factors
    - Quality control indicators
    """,
    agent=data_interpreter_agent
)

health_analysis_task = Task(
    description="""
    {report_text} Based on the interpreted data:
    1. Analyze each result's health implications
    2. Identify potential underlying conditions
    3. Assess overall health status
    4. Evaluate organ system functions
    5. Consider lifestyle impact on results
    6. Analyze nutrition status indicators
    7. Assess hydration and metabolic status
    """,
    expected_output="""
    Provide comprehensive health analysis:

    System Analysis:
    - Kidney function assessment
    - Liver health indicators
    - Cardiovascular status
    - Metabolic health
    - Nutritional status
    
    Risk Assessment:
    - Immediate health risks
    - Long-term health concerns
    - Preventive care needs
    
    Pattern Recognition:
    - Related symptoms to watch
    - Potential underlying conditions
    - Lifestyle factor impacts
    
    Nutritional Insights:
    - Vitamin/mineral status
    - Protein status
    - Hydration indicators
    
    Metabolic Status:
    - Blood sugar regulation
    - Energy metabolism
    - Hormone balance indicators
    """,
    agent=health_analyst_agent
)

action_insight_task = Task(
    description="""
    {report_text} Create comprehensive action plan including:
    1. Immediate actions needed
    2. Dietary modifications
    3. Exercise recommendations
    4. Lifestyle adjustments
    5. Supplement suggestions
    6. Medical follow-up requirements
    7. Prevention strategies
    8. Monitoring requirements
    """,
    expected_output="""
    Provide detailed actionable recommendations:

    Urgent Actions:
    - Immediate steps needed
    - Emergency signs to watch
    - When to seek immediate care
    
    Dietary Plan:
    - Foods to increase
    - Foods to avoid
    - Meal timing recommendations
    - Hydration guidelines
    
    Exercise Recommendations:
    - Suitable exercise types
    - Activity intensity levels
    - Exercise precautions
    - Progress monitoring
    
    Lifestyle Modifications:
    - Sleep recommendations
    - Stress management
    - Daily routine adjustments
    - Habit modifications
    
    Supplementation:
    - Recommended supplements
    - Dosage guidelines
    - Timing considerations
    - Precautions
    
    Medical Follow-up:
    - Specialists to consult
    - Follow-up tests needed
    - Monitoring schedule
    - Documentation needs
    """,
    agent=action_insight_agent
)

final_report_task = Task(
    description="""
    {report_text}Create a comprehensive, user-friendly report with visualizations:
    1. Generate clear summaries
    2. Create visual representations
    3. Use simple language
    4. Include progress tracking tools
    5. Add emergency guidelines
    6. Create quick-reference guides
    7. Also this is the past user report and data analyse this and have another column to corelate with this and provide information accordingly{past_report}
    """,
    expected_output="""
    # Your Health Report 📋

    ## Quick Summary ⚡
    Brief overview of key findings and urgent items

    ## Understanding Your Results 🔬
    ### Normal Findings ✅
    - Simple explanations of normal results
    - What these mean for your health
    
    ### Areas of Attention ⚠️
    - Clear explanation of concerning results
    - Why these matter
    - What to do about them

    ## Action Steps 🎯
    ### Immediate Actions ⚡
    - Urgent steps to take
    - When to seek medical help
    
    ### Dietary Guidelines 🍎
    - Foods to eat more
    - Foods to limit
    - Meal planning tips
    
    ### Exercise & Activity 💪
    - Recommended activities
    - Activity level guidelines
    - Safety precautions
    
    ### Lifestyle Changes 🌟
    - Sleep recommendations
    - Stress management
    - Daily routine adjustments

    ## Medical Follow-up 👨‍⚕️
    - Doctors to consult
    - Future tests needed
    - Appointment timeline
    
    ## Progress Tracking 📈
    Include relevant graphs and charts
    - Result trends
    - Goal tracking
    - Improvement metrics

    ## Emergency Guidelines 🚨
    - Warning signs
    - Emergency contacts
    - What to do in crisis

    ## Resources & Support 📚
    - Educational materials
    - Support groups
    - Helpful apps/tools
    #Relation with the past data and current report 
    - Comparison with previous results
    - Changes in health status
    - Recommendations for future monitoring
    

    
    ## Next Steps Checklist ✅
    - Prioritized action items
    - Timeline for actions
    - Progress tracking tools
    """,
    agent=report_compiler_agent
)

crew = Crew(
    agents=[
        data_interpreter_agent,
        health_analyst_agent,
        action_insight_agent,
        report_compiler_agent
    ],
    tasks=[
        interpretation_task,
        health_analysis_task,
        action_insight_task,
        final_report_task
    ],
    process=Process.sequential
)


def extract_and_clean_text(input_pdf):
    cleaned_lines = []
    
    # Extract text from PDF
    with pdfplumber.open(input_pdf) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text:
              
                lines = [" ".join(line.split()) for line in text.split("\n")]
               
                cleaned_lines.extend(filter(None, lines))
                
    return cleaned_lines
            

def main(pdf_file_path):

    extracted_text = extract_and_clean_text(pdf_file_path)
    if not extracted_text:
        print("Failed to extract text from the PDF.")
        return
    # ADD THE PAST DATA' HERE as a string 
    past_data = ""
    
    result = crew.kickoff(inputs={"report_text": extracted_text,"past_report":past_data})
    print(result)
    asyncio.run(text_to_speech((result)))



if __name__ == "__main__":
    pdf_file_path = "blood.pdf"  
    main(pdf_file_path)