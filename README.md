# Facebook spambot
1. (With NodeJS and npm installed) Run `npm install`
2. Create a `credentials.json` file in the project root and copy-paste the following JSON into it (with your own Facebook credentials)
    ```
    {
        "email": "email@domain.com",
        "password": "password"
    }
    ```
3. Download the latest Firefox (gecko) driver from https://github.com/mozilla/geckodriver/releases and add it to your system's PATH variable
    1. Go to `This PC > Computer > System properties > Advanced system settings > Environment Variables...`
    2. Under `System variables`, click `Path > Edit... > New` and enter the path of the Firefox driver
    3. Restart your computer
4. Edit the `fbId`, `message` and `noOfMessages` constants in `main.js`
5. Run `node main.js`
