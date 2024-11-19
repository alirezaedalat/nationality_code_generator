# Creating a README.md file for the provided national code generator project

readme_content = """
# National Code Generator 🇮🇷

This project is a JavaScript-based utility that generates a list of valid Iranian national codes using a specific algorithm. It produces 100 valid codes and stores them in an environment variable for further use in testing environments like Postman.

## Features

- Generates valid Iranian national codes based on mathematical rules.
- Creates a list of 100 unique national codes in one execution.
- Includes a Postman test case to validate the generated codes and store them in an environment variable.

## How It Works

1. **National Code Generation**:
    - Generates a 10-digit code where the first 9 digits are random.
    - Computes the 10th digit (check digit) using a modulus-11 algorithm to ensure validity.

2. **Postman Integration**:
    - The script uses the Postman `pm` object to store the generated list in an environment variable named `national_list`.
    - A test case ensures the length of the generated list is 100.

## Prerequisites

- [Postman](https://www.postman.com/) installed for running the test.
- Basic knowledge of JavaScript and Postman scripting.

## Usage

1. Copy the script and paste it into the Pre-request Script section in your Postman request.
2. Run the request, and the script will:
    - Generate 100 valid Iranian national codes.
    - Save the codes in the `national_list` environment variable.

3. Validate the results by checking:
    - The environment variable `national_list` contains 100 codes.
    - Each code complies with the national code algorithm.

## Example Output

- Example of a generated national code list:
