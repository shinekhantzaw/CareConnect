# CareConnect

CareConnect is an AI-powered web application that helps residents in Fort Wayne, Indiana quickly find local community resources such as food banks, housing assistance, legal aid, healthcare, and crisis support.

Instead of navigating multiple websites or outdated directories, users can search using natural language like:

"I need food help tonight"

The system returns nearby verified resources with addresses, phone numbers, hours of operation, and directions.

---

## 📌 Problem

Fort Wayne has hundreds of community support services including:

- Food assistance
- Housing and shelters
- Mental health services
- Addiction recovery programs
- Job training programs
- Legal aid organizations

However, these resources are often scattered across:

- government websites
- nonprofit directories
- outdated PDF lists
- phone hotlines

People in crisis should not have to navigate complicated systems to get help.

---

## 💡 Solution

CareConnect provides a fast and simple way to locate community resources.

Key features include:

- Natural language search
- AI-powered chat assistant
- Category-based filtering
- Emergency mode for 24/7 crisis resources
- Map integration for directions
- Admin dashboard for verifying resource data

---

## 🚀 Features (MVP)

- Search community resources
- Category filters (Food, Housing, Mental Health, etc.)
- Resource detail page
- Emergency mode ("I Need Help Now")
- AI chat assistant
- Admin dashboard
- Cloud deployment

---

## 🛠 Tech Stack

### Backend
- ASP.NET Core (C#)
- Entity Framework Core
- REST API

### Frontend
- Angular
- Tailwind CSS

### Database
- Microsoft SQL Server

### Cloud Infrastructure
- Azure App Service
- Azure SQL Database

### AI Integration
- Google Gemini API

### DevOps
- GitHub Actions (CI/CD)

---

## 🏗 Project Architecture

Frontend (Angular)  
↓  
ASP.NET Core API  
↓  
Azure SQL Database  

External Services  
- Google Gemini API  
- Google Maps  

---

## 👤 Example User Workflow

1. User visits the website
2. User types a request such as:

"I need help paying rent"

3. The system searches the resource database
4. Matching services are returned with:

- address  
- phone number  
- hours  
- directions  

5. User can open the location in Google Maps.

---

## 📚 Resource Categories

- Food & Meals
- Housing & Shelter
- Mental Health
- Addiction Recovery
- Job Training
- Financial Assistance
- Healthcare
- Family Services
- Senior Services
- Veterans Services
- Legal Aid
- Domestic Violence Support
- Disability Services
- Transportation

---

## ⚙️ Installation (Development)

Backend:

cd backend/CareConnect.Api  
dotnet restore  
dotnet run  

Frontend:

cd frontend/careconnect  
npm install  
ng serve  

---

## 🔮 Future Enhancements

- Map view for all resources
- SMS support for resource lookup
- Multi-language interface (English, Spanish, Burmese)
- Integration with Indiana 211 data
- Volunteer coordination tools
- Analytics dashboard

---

## 🎯 Project Goals

- Make community resources easier to access
- Reduce barriers for people in crisis
- Improve visibility for nonprofit services
- Provide a reliable directory of verified resources

---

## 💰 Cost Estimate

Approximate monthly hosting cost:

Azure App Service: ~$13  
Azure SQL Database: ~$5  
Gemini API: Free tier  

Total: **~$19/month**

---

## 👨‍💻 Authors

**Shine Khant Zaw**  
Computer Science Student  
Purdue University

**Chit Ko Ko**  
Computer Science Graduate  
Ball State University

---

## 📄 License

This project is licensed under the **MIT License**.
