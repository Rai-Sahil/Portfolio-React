const projects = [
    {
        id: 1,
        name: "Smart Pictionary",
        category: "NODEJS",
        overview: "Interactive AI Guessing Game",
        content: " React.js app utilizing a DigitalOcean-hosted ML model for image generation, Redis caching for game data storage, and Azure for server-side hosting. Security measures include HTTP-only JWT cookies, prevention of SQL injection via procedural DB calls. Utilized Express.js for API endpoints, tested with Postman.",
        pic: "",
        github: ""
    },
    {
        id: 2,
        name: "DocuIns",
        category: "ASPNET",
        overview: "Document Chatbot using AI",
        content: "The project uses ASP.NET MVC with Flowise AI's lang chain model via OpenAI and Pinecone vector DB for document centric chatbot. Utilizing Azure function for serverless microservice, Docker for containerization, SQL Server for Database, Identity and Entity Framework for Auth and custom Naive Bayes Text Classification model.",
        pic: "",
        github: ""
    },
    {
        id: 3,
        name: "CodeCraft",
        category: "ASPNET",
        overview: "Online Python IDE",
        content: "Developed a Python web block coding IDE with IronPython for compiler support, integrated OpenAI API for error summarization and code evaluation, employed NoSQL (MongoDB) for data storage/authentication, utilized SignalR for saving real-time code changes in cloud, and implemented a custom decision tree ML model.",
        pic: "",
        github: ""
    },
    {
        id: 4,
        name: "SAR Technology Inc.",
        category: "NODEJS",
        overview: "Image Recognition Platform",
        content: "Led a team of 3 to enhance SAR Technology Inc.'s web app for identifying missing persons/assets. Employed concurrent and batch processing, reducing image processing time by 65% to 12 mins for 5000 images. Implemented browser cookies for personalized search and simultaneous API display during processing.",
        pic: "",
        github: ""
    },
    {
        id: 5,
        name: "ViewVibe",
        category: "DESKTOP",
        content: "",
        overview: "Video Sharing/Streaming App",
        pic: "",
        github: ""
    },
    {
        id: 6,
        name: "Budget Barrier",
        category: "MOBILE",
        content: "",
        overview: "Expense Tracker",
        pic: "",
        github: ""
    },
    {
        id: 7,
        name: "Butterfly Effect",
        category: "NODEJS",
        content: "Collaborated with a team of 4 to develop global warming based quiz web game using MySQL, Express.js, Node.js, and Heroku. The app featured game progress storage, authentication, and CRUD operations. Concurrency, AJAX requests, and Express server optimization were employed for performance enhancement.",
        overview: "EnviroQuiz Survival Challenge",
        pic: "",
        github: ""
    },
    {
        id: 8,
        name: "SpaceSaver",
        category: "GAMES",
        content: "",
        overview: "Java Asteroids Game",
        pic: "",
        github: ""
    },
    {
        id: 9,
        name: "Activv",
        category: "MOBILE",
        content: "",
        overview: "Habbit Tracker",
        pic: "",
        github: ""
    },
    {
        id: 10,
        name: "Sahil Rai",
        category: "NODEJS",
        content: "The project utilized React.js for frontend, Vercel for hosting, and structured using best practices. As a my personal portfolio, developed by solely by me, it showcases my skills, project, publication, epereince and more with a user-friendly interface, emphasizing efficiency and accessibility.",
        overview: "Portfolio Website",
        pic: "",
        github: ""
    },
];

export default projects;