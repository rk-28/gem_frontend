## S3 BUCKET LIFECYCLE RULE

1. Login to AWS and search for S3

<img src="https://i.ibb.co/Jjc3NGt/s3-1.png">

2. From the list of buckets, choose the bucket that you want to create the lifecycle rule.

<img src="https://i.ibb.co/cQK73cr/s3-2.png">

3. Click on the Management tab.

4. Choose Create lifecycle rule.

<img src="https://i.ibb.co/26mpvGg/s3-3.jpg">

5. Now enter a rule name and choose "This rule applies to all objects in the bucket" for rule scope
6. Check the acknowledgement

<img src="https://i.ibb.co/1mDTM4j/s3-4.png">

7. In the Lifecycle rule actions, select the following,
	- Expire current versions of objects
8. In the Expire current versions of objects field, enter "120"

<img src="https://i.ibb.co/FgtqczG/s3-5.png">

9.Choose Create rule.

<img src="https://i.ibb.co/pzhcZGd/s3-6.png">

10.Create another rule by clicking on Create lifecycle rule.

11.Now enter a rule name and choose "This rule applies to all objects in the bucket" for rule scope.

12.Check the acknowledgement
 
<img src="https://i.ibb.co/1mDTM4j/s3-4.png">

13. In the Lifecycle rule actions, select the following,
	- Delete expired object delete markers or incomplete multipart uploads
14.And then check the "Delete expired object delete markers" checkbox in the section below
 
<img src="https://i.ibb.co/Sy39S7m/s3-8.png">

15.Now choose Create rule.

<img src="https://i.ibb.co/7SdvX9v/s3-9.png">

https://aws.amazon.com/premiumsupport/knowledge-center/s3-empty-bucket-lifecycle-rule/

The above configuration will expire the object 120 days from the creation date, and the 2nd rule will delete the expired objects permanently.
