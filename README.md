# 🗣️ FeedbackFlow

FeedbackFlow is a lightweight serverless application built on AWS that collects user feedback via a simple frontend and stores it securely in DynamoDB. Designed for scalability, cost-efficiency, and recruiter-facing polish.

---

## 🚀 Features

- AWS Lambda backend with payload validation  
- API Gateway integration for secure HTTP endpoints  
- DynamoDB for persistent feedback storage  
- IAM roles with least privilege access  
- Clean folder structure and modular code  
- Architecture diagram included for portfolio presentation  

---

## 🛠️ Tech Stack

Compute: AWS Lambda  
API Routing: Amazon API Gateway  
Database: Amazon DynamoDB  
IAM & Auth: AWS IAM Roles  
Deployment: AWS Console / CLI  

---

## 📁 Folder Structure

FeedbackFlow/  
├── lambda/  
│   └── index.js  
├── assets/  
│   └── architecture-diagram.png  
├── README.md  
└── .env.example  

---

## 📌 Setup Instructions

1. Clone the repo  
   `git clone https://github.com/yourusername/FeedbackFlow.git`  
   `cd FeedbackFlow`

2. Create DynamoDB Table  
   - Table name: FeedbackFlowTable  
   - Primary key: id (String)

3. Deploy Lambda Function  
   - Runtime: Node.js 18.x  
   - Handler: index.handler  
   - Environment variable: TABLE_NAME=FeedbackFlowTable  
   - Attach IAM role with dynamodb:PutItem permission

4. Configure API Gateway  
   - Create a REST API  
   - POST method → Lambda integration  
   - Enable CORS for frontend access  

---

## 🧪 Sample Payload

{
  "name": "Akshith",
  "feedback": "This app is clean and fast!"
}

---

## 📸 Architecture Diagram

Include a high-resolution PNG in the `assets/` folder named `architecture-diagram.png`. Use AWS-certified icons and modern layout.

---

## 💡 Future Enhancements

- Add frontend with React or plain HTML  
- Enable email notifications via SES  
- Add sentiment analysis using Amazon Comprehend  
- Implement pagination and feedback analytics  

---

## 🧑‍💻 Author

Akshith — Cloud enthusiast building recruiter-magnetic AWS projects.  
LinkedIn: https://www.linkedin.com/in/akshith-a-209a64370/ 

