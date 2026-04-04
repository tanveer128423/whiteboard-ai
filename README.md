#  Whiteboard AI Studio

A real-time collaborative whiteboard with AI-powered system design analysis.

---

##  Overview

Whiteboard AI Studio is a full-stack application that allows multiple users to draw together in real-time and receive intelligent system design feedback powered by AI.

Users can sketch diagrams (like system architectures), and the app analyzes them to generate structured explanations, identify weaknesses, and suggest improvements.

---

##  Features

* ✏️ Real-time collaborative whiteboard (WebSockets)
* 👥 Room-based multi-user sessions
* 🧠 AI-powered diagram analysis
* 🔄 Multi-provider AI support:

  * Ollama (local, free)
  * OpenAI
  * Google Gemini
  * Groq / Grok
* 📊 Structured system design feedback:

  * Architecture type
  * Data flow
  * Strengths & weaknesses
  * Scalability suggestions

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* HTML Canvas API
* Socket.io-client

### Backend

* Node.js
* Express
* Socket.io

### AI Integration

* Ollama (local LLM)
* OpenAI API
* Google Gemini API
* Groq API

---

## ⚙️ How It Works

1. Users draw on the canvas
2. Drawing strokes are captured and grouped into nodes
3. Nodes are converted into a structured diagram
4. Diagram is sent to the backend
5. Selected AI provider analyzes the diagram
6. Structured feedback is returned to the user

---

## 🧪 Example Output

The AI provides structured insights like:

* System interpretation
* Architecture type (e.g., client-server, microservices)
* Data flow explanation
* Missing components (cache, load balancer)
* Scalability improvements

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/whiteboard-ai-studio.git
cd whiteboard-ai-studio
```

### 2. Install dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd ../server
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file in `/server`:

```env
OPENAI_API_KEY=your_key
GEMINI_API_KEY=your_key
GROQ_API_KEY=your_key
OLLAMA_URL=http://localhost:11434
```

---

### 4. Run the application

#### Start backend

```bash
cd server
node index.js
```

#### Start frontend

```bash
cd client
npm run dev
```

---

### 5. (Optional) Run Ollama locally

```bash
ollama run llama3
```

---

## 📌 Usage

1. Open the app in browser
2. Draw a diagram (e.g., User → Server → Database)
3. Select an AI provider
4. Click **Explain (AI)**
5. View structured system design feedback

---

## ⚠️ Limitations

* Shape detection is heuristic-based (not full computer vision)
* Node labeling is inferred (Node1, Node2, etc.)
* Requires API keys for external AI providers

---

## 🚀 Future Improvements

* Rectangle and arrow detection
* Automatic text recognition (labels like “User”, “DB”)
* Export diagrams
* Persistent sessions
* Better AI context understanding

---

## 📄 License

This project is open-source and available under the MIT License.
