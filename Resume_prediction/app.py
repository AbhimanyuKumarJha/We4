#pip install -r requirement.txt
# run the above command to install all required libraries
import streamlit as st
import PyPDF2 as pdf
import json
import os
from dotenv import load_dotenv
import google.generativeai as genai
import re

load_dotenv()  # load all our environment variables

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))


def get_gemini_response(input_prompt):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(input_prompt)
    return response.text


def input_pdf_text(uploaded_file):
    reader = pdf.PdfReader(uploaded_file)
    text = ""
    for page in range(len(reader.pages)):
        page = reader.pages[page]
        text += str(page.extract_text())
    return text


def get_response(uploaded_file, jd):
    text = input_pdf_text(uploaded_file)
    input_prompt = """
    Hey Act Like a skilled or very experienced ATS (Application Tracking System)
    with a deep understanding of the tech field, software engineering, data science, data analyst
    and big data engineer. Your task is to evaluate the resume based on the given job description.
    You must consider the job market is very competitive and you should provide 
    the best assistance for improving the resumes. Assign the percentage Matching based 
    on JD and the missing keywords with high accuracy
    resume:{text}
    description:{jd}

    I want output in JSON format for example:

    {{
    Percentage Match: ["Percentage of resume match with JD"],
    MissingKeywords: ["Missing keywords from the resume that are required in JD"],
    Profile Summary: ["Your feedback on the resume of what it lacks"]
    }}

    """

    response = get_gemini_response(input_prompt.format(text=text, jd=jd))
    print(response)
    match = re.search(r'{.*}', response)
    if match:
        json_data =match.group()
        return json_data
    else:
        return None


