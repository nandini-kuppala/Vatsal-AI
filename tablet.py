from crewai import Agent, Task, Crew, Process, LLM
from crewai_tools import SerperDevTool
from dotenv import load_dotenv
from paddleocr import PaddleOCR
import os
import json
from PIL import Image
from langchain_community.llms import Ollama  

# Environment setup
load_dotenv()
os.environ['SERPER_API_KEY'] = "6f2227a931b482b6e1b21298ecc47bb6865beb28"


# LLM Configuration
llm = LLM(
    model="gemini/gemini-1.5-flash",
    temperature=0.7,
    api_key="AIzaSyBNOQJ3D5xVYeKt7xokZlQ-zXZrKwGgspE"

)
# Tools
serper_tool = SerperDevTool()

# Agent Definitions
research_agent = Agent(
    role="Medical Research Specialist",
    goal="Research comprehensive information about the identified medication-{tablet}",
    backstory="""Expert in pharmaceutical research with extensive knowledge of drug 
    databases and medical literature. Specializes in gathering detailed medication information.""",
    tools=[serper_tool],
    llm=llm,
    verbose=True
)

consumption_analysis_agent = Agent(
    role="Clinical Usage Specialist",
    goal="Analyze who should and shouldn't use the medication{tablet}",
    backstory="""Clinical pharmacist with expertise in drug interactions and 
    patient-specific considerations. Focuses on determining appropriate patient groups.""",
    tools=[serper_tool],
    llm=llm,
    verbose=True
)

side_effects_agent = Agent(
    role="Drug Safety Analyst",
    goal="Investigate and document all potential side effects{tablet}",
    backstory="""Pharmacovigilance expert specializing in drug safety profiles and adverse 
    reactions. Extensive experience in analyzing drug safety data.""",
    tools=[serper_tool],
    llm=llm,
    verbose=True
)

alternatives_agent = Agent(
    role="Alternative Medicine Specialist",
    goal="Research natural alternatives and dietary considerations{tablet}",
    backstory="""Integrative medicine specialist with expertise in both conventional and 
    natural treatments. Focuses on holistic treatment approaches and dietary recommendations.""",
    tools=[serper_tool],
    llm=llm,
    verbose=True
)

report_compiler_agent = Agent(
    role="Medical Communication Specialist",
    goal="Compile and format all information into an accessible report{tablet} and also tell that user based on his medical data{profile} can he consume the medicine or not.",
    backstory="""Expert in medical communication and health literacy. Specializes in 
    converting complex medical information into user-friendly content suitable for all audiences.""",
    tools=[serper_tool],
    llm=llm,
    verbose=True
)
# Task Definitions
research_task = Task(
    description="""
    1. Analyze the OCR output to identify the medication{tablet}
    2. Research comprehensive information including:
       - Active ingredients
       - Drug classification
       - General purpose
       - Manufacturer information
       - Standard dosage
    3. Verify information across multiple authoritative sources
    """,
    expected_output="""
    Provide a clear description of the medication including:
    
    Basic Information:
    - Name of the medication and its generic versions
    - What kind of medicine it is
    - What it's mainly used for
    
    Technical Details:
    - List of active ingredients
    - How the medicine works in simple terms
    - Standard dosage information
    
    Manufacturing Information:
    - Company that makes it
    - Quality standards and certifications
    """,
    agent=research_agent
)

consumption_task = Task(
    description="""
    1. Determine appropriate patient groups{tablet}
    2. Identify contraindications
    3. List specific conditions where the medication is unsafe
    4. Document age restrictions
    5. Note pregnancy/nursing considerations
    6. List drug interactions
    """,
    expected_output="""
    Provide clear guidance on who should and shouldn't take the medicine:
    
    Good For:
    - List of conditions this medicine helps with
    - Types of patients who can benefit
    - Age groups that can take it safely
    
    Not Suitable For:
    - People with specific health conditions
    - Age restrictions
    - Pregnancy and nursing considerations
    
    Important Warnings:
    - Other medicines that shouldn't be taken together
    - Specific health conditions that make this medicine unsafe
    - Special precautions for certain groups
    """,
    agent=consumption_analysis_agent
)

side_effects_task = Task(
    description="""
    1. List all potential side effects, categorized by severity{tablet}
    2. Identify warning signs that require medical attention
    3. Document frequency of side effects
    4. Note any long-term usage concerns
    5. Specify monitoring requirements
    """,
    expected_output="""
    Provide a comprehensive but understandable list of side effects:
    
    Common Side Effects:
    - List of mild side effects that might happen
    - How often they typically occur
    - How to manage these effects
    
    Serious Side Effects:
    - Warning signs to watch for
    - When to contact a doctor immediately
    - Rare but important complications
    
    Long-term Considerations:
    - Effects of long-term use
    - What regular check-ups might be needed
    - Signs that the medicine needs to be adjusted
    """,
    agent=side_effects_agent
)

alternatives_task = Task(
    description="""{tablet}
    1. For non-chronic conditions only:
       - Research evidence-based natural alternatives
       - Evaluate effectiveness of alternatives
    2. For all medications:
       - Compile dietary recommendations
       - List foods to avoid while taking the medication
       - Suggest lifestyle modifications
    3. Note: Skip natural alternatives for chronic conditions
    """,
    expected_output="""
    Provide helpful alternatives and lifestyle recommendations:
    
    If for non-chronic conditions:
    - Natural remedies that might help
    - How effective these alternatives are
    - When to use alternatives vs. medication
    
    Diet Recommendations:
    - Foods that help the medicine work better
    - Foods to avoid while taking the medicine
    - Best times to eat with this medicine
    
    Lifestyle Tips:
    - Activities that help
    - Things to avoid
    - Daily routine suggestions
    """,
    agent=alternatives_agent,
    tools=[serper_tool]
)

final_report_task = Task(
    description="""
    1. Compile all information into a user-friendly report{tablet}
    2. Use clear, simple language
    3. Include appropriate emojis for better understanding
    4. Organize information in easily digestible sections
    5. Add visual aids like bullet points and headers
    6. Include a simple summary at the beginning
    7.There will be a user data which will have the user data {profile} you need to also tell that can the user can conume the tablet or not if there is any problem
    """,
    expected_output="""
    Create a friendly, easy-to-read report with these sections:
    mainly dont mention that you are not sure about the medicine and unsure uncertain consult docturs such tings be confindent on what you have found nd generate the report dont mention the possible if you are thomnking it is possible medicine then it is corrent  

    📋 Quick Summary
    A few simple sentences about what this medicine is and why it's used

    💊 About Your Medicine
    - What it is
    - What it's for
    - How to take it

    ✅ Right For You?
    - Who should take it
    - Who should be careful
    - Who should not take it

    ⚠️ Watch Out For
    - Common side effects
    - When to call the doctor
    - Simple safety tips

    🍎 Healthy Habits
    - Food tips
    - Daily routine advice
    - Things to avoid

    🌿 Other Options (if not for chronic conditions)
    - Natural alternatives
    - Lifestyle changes
    - When to use them
    
    #User can consume or not
    -based on the user profile can he consume the tablet or not

    💡 Remember
    - Important tips
    - Quick reminders
    - When to get help
    """,
    agent=report_compiler_agent
)
crew = Crew(
    agents=[
        research_agent,
        consumption_analysis_agent,
        side_effects_agent,
        alternatives_agent,
        report_compiler_agent
    ],
    tasks=[
        research_task,
        consumption_task,
        side_effects_task,
        alternatives_task,
        final_report_task
    ],
    process=Process.sequential,
)

def perform_paddleocr(image_path):
    ocr = PaddleOCR()
    result = ocr.ocr(image_path, cls=True)
    return result

def main(pdf_file_path):
    extracted_text = perform_paddleocr(pdf_file_path)

    if not extracted_text:
        print("Failed to extract text from the PDF.")
        return

    # Convert tuple to string if needed
    if isinstance(extracted_text, tuple):
        extracted_text = " ".join(map(str, extracted_text))
    elif not isinstance(extracted_text, str):
        extracted_text = str(extracted_text)  # Convert other types to string

    # User profile data (Modify this as needed)
    user_profile = "I have thyroid"

    # Ensure extracted_text is valid before passing to crew.kickoff()
    result = crew.kickoff(inputs={"tablet": extracted_text, "profile": user_profile})

    print(result)


if __name__ == "__main__":
    pdf_file_path = "tab1.jpg"  
    main(pdf_file_path)
