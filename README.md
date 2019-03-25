# Bulk Email Check

Bulk Email Check is a simple node.js program that finds email addresses in bulk by using names and domains. Made using email-permutator and email-existence, the program returns a CSV file of valid email addresses. Useful for email marketing - you could find almost any email on the web using this.

## How to Use

  - Clone the repo
  - Edit 'file.csv' by entering these three values:
  -- First Name of the prospect
  -- Last Name of the prospect
  -- Domain name of the prospect's company
  - Run the program after navigating to the project folder using 
  ```sh
  node index.js
  ```
  - Locate the output CSV file (valid_emails.csv) in the root folder of the project

## How this works
The program takes in first name and last name of the prospect and generates several email combinations. Post that, all combinations go through an exitence check, which involves telnetting to the MX server of the email domain and attempting to send an email to the supplied address. MX servers return 250 if the email address exists (it does not follow through with sending the test email). Finally, the valid emails are exported in CSV format.

#### Note
 As the output includes all valid email addresses, the program may sometimes return email addresses that do not belong to that particular user. For instance, if someone searches for 'John Hancock' at 'example.com', one of the valid emails that the program will return could be 'j_h@example.com' - but this could belong to 'Jane Hancock'.

Enjoy!


