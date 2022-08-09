## CREATING AND ATTACHING BILLING POLICY TO IAM USER

Step 1: Login to AWS console with root username and password(Only root user can add the billing policy to IAM user).

<img src="https://i.ibb.co/PcSgB9c/bill-1.png" width="700" height="350">

Step 2: After Login - Search for IAM in the search bar and click on IAM in the suggestion tab

<img src="https://i.ibb.co/3yzkFTW/bill-2.png" width="700" height="350"> 

Step 3: In IAM dashboard click on policies in left navigation and click on create policy

<img src="https://i.ibb.co/jRzthhC/bill-3.png" width="700" height="350">

<img src="https://i.ibb.co/tm3pYKs/bill-4.png" width="700" height="350">

Step 4: In the "Choose a service" Choose Billing and check the "All billing actions" to provide full access

<img src="https://i.ibb.co/1fLMBZM/bill-5.png" width="700" height="350">
 
<img src="https://i.ibb.co/k8wd0LQ/bill-6.png" width="700" height="350">

Step 5: Now click "Next" and click on Add tag

<img src="https://i.ibb.co/StBqtwJ/bill-7.png" width="700" height="350">
 
<img src="https://i.ibb.co/bvX5Hk1/bill-8.png" width="700" height="350">
 
Step 6: Add the Tag and the value and click on “Next”

<img src="https://i.ibb.co/2kFL8h9/bill-9.png" width="700" height="350">

<img src="https://i.ibb.co/9tn6Fbd/bill-10.png" width="700" height="350">

Step 7: Review the policy and click on "Create policy"

<img src="https://i.ibb.co/6nT60p0/bill-11.png" width="700" height="350">

Step 8:  After creating the policy - Switch to policy section

<img src="https://i.ibb.co/Wzp0p37/bill-12.png" width="700" height="350">

Step 9: Now select the created policy, click on  actions and click “Attach”

<img src="https://i.ibb.co/hVc7MVm/bill-13.png" width="700" height="350">

Step 10: Search for the user and select the User

Step 11: Click the “Attach policy” at the bottom of the page to attach the policy to the particular user
 
<img src="https://i.ibb.co/jLNyZx4/bill-14.png" width="700" height="350">

Step 12: Click on the account name in top right corner and click on Account in the dropdown 

Step 13: Scroll down to until “IAM USER AND ROLE ACCESS TO BILLING INFORMATION” and click edit
-	Now check the Activate IAM access checkbox and click Update
