![bank](https://user-images.githubusercontent.com/36485235/185007346-f0b76a9a-5045-479c-baf0-203cfd8340d1.png)

# Bank Dashboard
Decentralized Banking Dashboard to manage and inspect information of banks from an [own REST API](https://github.com/jongwon254/Decentralized-Bank-API).

## Technologies
- Languages: Kotlin, TypeScript, JavaScript, HTML, and CSS
- Backend: 
  - REST API built with Spring Boot and PostgreSQL
  - Test Driven Development with JUnit, Spring Boot Test, MockMVC, and Jackson
  - Deployed with Docker
- Frontend: 
  - Built with Angular and Bootstrap
  
## Functionality
- This dashboard comprises a list of available banks, detailed information of the currently selected bank, and a search function
- Users can select or search specific banks to inspect categories, such as account number, transaction fee, or trust score
- A list shows the currently available banks with their ID and account number. Users can inspect a bank to display the bank on the main dashboard for more information 
- The main dashboard consists of the bank information and a search function. It shows the ID, ip address, account number, node identifier, protocol, port, transaction fee, and trust details
- Users can also search for specific banks by entering the ID in the search bar
- It retrieves and displays information from the [Bank API](https://github.com/jongwon254/Decentralized-Bank-API)

## Screenshots
<img width="592" alt="b1" src="https://user-images.githubusercontent.com/36485235/185008917-c4016553-b1de-48a2-ba16-a4238e1ffa05.png">

<img width="251" alt="b2" src="https://user-images.githubusercontent.com/36485235/185008956-13b4706b-0481-4767-ba35-c005755f35e8.png">
<img width="353" alt="b3" src="https://user-images.githubusercontent.com/36485235/185008962-5a0616ec-e429-47b7-a588-e70a6c172d92.png">


## More Info
[Visit Website](https://jongwonlee.dev/banks)
