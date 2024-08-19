---
# Random Number Generation using OpenAI API

This TypeScript project demonstrates random number generation using OpenAI's GPT model. The randomness of generated numbers is controlled by varying the `temperature` parameter in the API request. The goal of the project is to explore how temperature settings affect the randomness of number generation and to plot the distribution of the resulting numbers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Temperature Settings](#temperature-settings)
- [Plotting](#plotting)
- [Project Structure](#project-structure)
- [How to Run the Application](#how-to-run-the-application)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- An OpenAI API key (you can obtain one from [OpenAI](https://platform.openai.com/))

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sika-007/typescript-project.git
   cd typescript-project
   ```
2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```
3. **Set Up Environment Variables**

   Create a `.env` file in the root of your project and add your OpenAI API key:

   ```bash
   OPENAI_API_KEY=your-openai-api-key
   ```

## Usage

### Generating Random Numbers

The core of this project is generating random numbers by making API calls to the OpenAI GPT model. The randomness is influenced by the `temperature` setting, which you can adjust to control the variability of the responses.

### Example Code

The primary function that generates random numbers is located in `src/api/openaiClient.ts`. It uses the `temperature` parameter to adjust randomness:

```typescript
const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  temperature: 0.7, // Adjust this value to control randomness
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Please generate a random number between 0 and 100." },
  ],
});
```

You can modify the temperature value in the code to observe different behaviors in the generated numbers.

## Temperature Settings

- **Temperature**: A value between 0 and 1 that controls the randomness of responses. A higher value like 0.9 means the model will take more risks, resulting in more varied outputs. A lower value like 0.1 will make the output more focused and deterministic.

## Plotting

The distribution of the generated random numbers is plotted using an ASCII-based charting library. The function responsible for plotting is located in `src/utils/plotter.ts`. The chart visually represents how the temperature affects the distribution of generated numbers.

## Project Structure

```bash
your-repo-name/
├── dist/                     # Compiled JavaScript output
├── node_modules/             # Project dependencies
├── src/                      # Source code
│   ├── api/                  # API calls and OpenAI interaction
│   │   └── openaiClient.ts   # Handles the API requests
│   ├── utils/                # Utility functions
│   │   └── plotter.ts        # Generates ASCII plots of number distributions
│   └── index.ts              # Entry point for the application
├── .env                      # Environment variables (not included in repo)
├── .gitignore                # Specifies files and directories to ignore in git
├── package.json              # Project metadata and dependencies
├── README.md                 # Project documentation
└── tsconfig.json             # TypeScript configuration
```

## How to Run the Application

1. **Build the Project**

   Compile the TypeScript code to JavaScript by running:

   ```bash
   tsc
   ```
2. **Run the Application**

   After building the project, run the application:

   ```bash
   node dist/index.js
   ```

   The application will generate a series of random numbers based on the temperature setting and display the distribution plot in your terminal.
3. **Adjust Temperature**

   Modify the temperature setting in `src/api/openaiClient.ts` to see how it influences the randomness of generated numbers.
4. **View Results**

   The distribution of the generated random numbers will be displayed as an ASCII chart in your terminal. 

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
---
