---
# Random Number Generation using OpenAI API

This TypeScript project demonstrates random number generation using OpenAI's GPT model. The randomness of generated numbers is controlled by varying the `temperature` parameter in the API request for the first project. 

For the second project in the `improvements` folder, the randomness comes from getting the mod 10 of two randomly generated summaries about randomly generated topics. These two digits are combined to get numbers from 0 to 99 randomly.

The goal of the project is to explore the best and most effective way to generate random numbers using OpenAI's GPT-4o mini model.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [First Project Usage](#first-project-usage)
- [Improvements Usage](#improvements-usage)
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
   https://github.com/sika-007/TypeScript-Project.git
   cd TypeScript-Project
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
   
## Project Structure

```bash
└── 📁TypeScript-Project
    └── 📁dist                              # Compiled JavaScript output
    └── 📁node_modules                      # Project dependencies
    └── 📁src                               # Source code
        └── 📁first-project                 # Temperature-based project
            └── 📁api                       # API calls and OpenAI interaction
                └── openaiClient.ts         # Handles the API requests
            └── 📁utils                     # Utility functions
                └── plotter.ts              # Generates ASCII plots of number distributions
            └── index.ts                    # Entry point for the application
        └── 📁improvements                  # Summary-based project 
            └── 📁api                       # API calls and OpenAI interaction
                └── openaiClient.ts         # Handles the API requests
            └── 📁utils                     # Utility functions
                └── plotter.ts              # Generates ASCII plots of number distributions
            └── index.ts                    # Entry point for the application
    └── .env
    └── .gitignore
    └── package-lock.json
    └── package.json
    └── readme.md
    └── tsconfig.json
```

## First Project Usage

### Generating Random Numbers

The core of the first project is generating random numbers by making API calls to the OpenAI GPT model. The randomness is influenced by the `temperature` setting, which you can adjust to control the variability of the responses.

### Example Code

The primary function that generates random numbers is located in `src/first-project/api/openaiClient.ts`. It uses the `temperature` parameter to adjust randomness:

From `src/first-project/index.ts`,
```typescript
plotGraphDistribution(2); // Set temperature by passing a number between 0 and 2
```

You can modify the temperature value in the code to observe different behaviors in the generated numbers.

### Temperature Settings

- **Temperature**: A value between 0 and 2 that controls the randomness of responses. A higher value like 0.9 means the model will take more risks, resulting in more varied outputs. A lower value like 0.1 will make the output more focused and deterministic.

### Plotting

The distribution of the generated random numbers is plotted using an ASCII-based charting library. The function responsible for plotting is located in `src/first-project/utils/plotter.ts`. The chart visually represents how the temperature affects the distribution of **10** generated numbers. More spikes and lower amplitudes indicate more randomness.

### How to Run the Application

1. **Build the Project**

   Compile the TypeScript code to JavaScript by running:

   ```bash
   tsc
   ```
   
2. **Run the Application**

   After building the project, run the application:

   ```bash
   node dist/first-project/index.js
   ```

   The application will generate a series of random numbers based on the temperature setting and display the distribution plot in your terminal.
3. **Adjust Temperature**

   Modify the temperature setting in `src/api/openaiClient.ts` to see how it influences the randomness of generated numbers.
4. **View Results**

   The distribution of the generated random numbers will be displayed as an ASCII chart in your terminal.



## Improvements Usage

### Generating Random Numbers

The core of the first project is generating random numbers by making API calls to the OpenAI GPT model. The randomness is derived from generating two random text summaries. Taking the mod of the number of words in both summaries and combining both numbers to arrive at a two digit number between 00 and 99.
### Example Code

The primary function that generates random numbers is located in `src/improvements/api/openaiClient.ts`. It uses the `summaries` parameter to distract OpenAI's from deliberately trying to generate randomness:

From `src/improvements/index.ts`,
```typescript
plotGraphDistribution(); // No need to pass in temperature
```

### Plotting

The distribution of the generated random numbers is plotted using an ASCII-based charting library. The function responsible for plotting is located in `src/improvements/utils/plotter.ts`. The chart visually represents how the temperature affects the distribution of **10** generated numbers. More spikes and lower amplitudes indicate more randomness.


### How to Run the Application

1. **Build the Project**

   Compile the TypeScript code to JavaScript by running:

   ```bash
   tsc
   ```
   
2. **Run the Application**

   After building the project, run the application:

   ```bash
   node dist/improvements/index.js
   ```

   The application will generate a series of random numbers based on the temperature setting and display the distribution plot in your terminal.

4. **View Results**

   The distribution of the generated random numbers will be displayed as an ASCII chart in your terminal. 


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
---
