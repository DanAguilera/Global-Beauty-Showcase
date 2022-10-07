# Global-Beauty-Showcase

Backlog (User Stories):
Home Page → Daniel
Persistent Nav Bar
As a Global Beauty User, I to see a persistent Navbar across all the pages on the Global Beauty Brand site to easily navigate across pages
	Given users will need to navigate across pages
	When a user is on every web page on beauty brand
Then they will see the same nav bar with About, Contact, and Product Buttons that will navigate them to their respective pages
Persistent Footer
As a Global Beauty User, I to see a persistent footer across all the pages on the Global Beauty Brand site to easily navigate across pages
	Given users will need to navigate across pages
	When a user is on every web page on beauty brand
Then they will see the same footer with About, Contact, Product Buttons, and Copyright Notice
Jumbotron Slideshow
As a Global Beauty User, I to see a persistent jumbotron image on the homepage
	Given users want a pleasing homepage
	When a user lands on the global beauty homepage
Then they will see a persistent image on the homepage
Buttons (Types only)
As a Global Beauty User, when viewing the home page, I want to be able to click a button to select which type of beauty product I want to review
	Given users can select different beauty products to review 
	When a user navigates to the beauty home page
Then they will be able to choose the type of beauty product they want to review (Blush, Bronzer, Eyebrow, Eyeliner, Eyeshadow, Foundation, Lip Liner, Mascara)
Product Page (Unfiltered) → Paula
Navigate to Product Page
As a Global Beauty User, I want when I click the Product thumbnail on the navbar to be redirected to an unfiltered product page
	Given users can select different pages from the nav bar
	When a user selects the product page
Then they will be navigated to the product page

Action Prompt
As a Global Beauty User, when I am navigated to the product page, I want to be prompted to selected which type of beauty product I want to review
	Given users can select different beauty products to review 
	When a user navigates to the beauty product page
Then they will see a pop up / page prompt that tells them to select the type of product they want to review

Buttons to filter different Product Types
As a Global Beauty User, when viewing the product page, I want to be able to click a button to select which type of beauty product I want to review
	Given users can select different beauty products to review 
	When a user navigates to the beauty product page
Then they will be able to choose the type of beauty product they want to review (Blush, Bronzer, Eyebrow, Eyeliner, Eyeshadow, Foundation, Lip Liner, Mascara)

Trigger Product Search API from page
As a Global Beauty User, when I click the product type on the product page, I want to trigger the Makeup API to provide a list of beauty brands pre-populated based on the selected type
	Given users can select the product type from the product page
	When a user clicks a specific product type button
Then they will trigger the makeup API to fetch the list of beauty brands associated with that product type 

Product Page (Filtered) → Janaee
Trigger product search API from home page
As a Global Beauty User, when I click the product type on the home page, I want to be navigated to the Product Page with a list of beauty brands pre-populated based on the selected type
	Given users can select the product type from the home page
	When a user selects the home page
Then they will be navigated to the product page 
And they will trigger the makeup API to fetch the list of beauty brands associated with that product type 
Filter down product type to a specific brand
As a Global Beauty User, after I clicked the brand that I want, I want to see a list of different products of that type that that brand offers so I can select the product I want
	Given users can select the specific brand that they want
	When a user selects the brand
Then they will see the list of products that match the brand and the type
		
Filter to video based on home page click and product page click
As a Global Beauty User, after I have selected the product type and brand that I want, I want to see a list of YouTube Videos related to that product type and brand
	Given users can select the specific brand and product type that they want
	When a user selects a button to view tutorials
Then they will see the list of YouTube video links and video thumbnails related to their search

Watch videos on the page
As a Global Beauty User, after I have selected the video related to the product type and brand that I want, I want to be able to view the video on the website without leaving the page
	Given users can select the specific product review video they want
	When a user selects a YouTube video to watch
Then the video will play on the page


Contact Us → Corbin

As a Global Beauty User, when I click the “Contact Us” button in the NAV bar on the home page, I want to be sent to the “Contact Us” page that includes a jumbotron slideshow of product pictures to view as well as a way for me to contact the website owners.
		
Contact Us Form

As a Global Beauty User on the “Contact Us” page, I want to be able to input my email and a reason for contact so that I can get in touch with the website owners.
	
Given, users can input their email as a point of contact for the owners to write back.
When, a user inputs their email into the email input bar,
Then, their email will be sent to our “Message Center” in the back end (which won’t exist).

Given, users can input a reason for contact so that the website owners have an understanding of the concern.
When, a user inputs their reason for contact into the “How can we help you today?” box,
Then, their reason for contact is sent to our backend “Message Center” (which won’t exist).

Given, users can input their email and reason for contact in their respective areas.
When, a user clicks the send button,
Then, a browser alert is shown with a message that says “Message sent!”

Give, users will be inputting their requests to Global Beauty
When they submit a contact us form
Then, the contact us form data will be stored in local storage so that the user can see the history of messages that were sent

Given, local storage will hold the history of messages sent
When, the user reviews the contact us page
Then, there will be a history of messages sent displayed with relevant information

Jumbotron Slideshow

As a Global Beauty User on the “Contact Us” page, I am greeted with a slideshow that contains pictures of makeup products that switches every 2 seconds.

About Us → Corbin

As a Global Beauty User, when I click the “About Us” button in the NAV bar on the home page, I want to be sent to the “About Us” page that includes a jumbotron slideshow of product pictures to view as well sections of information about the website and the brand.

About Us Section

As a Global Beauty User on the “About Us” page, I want to view sections of information about the website and the “Global Beauty” brand.

Jumbotron Slideshow

As a Global Beauty User on the “About Us” page, I am greeted with a slideshow that contains pictures of makeup products that switches every 2 seconds.
(Pics here are different than the ones on the “Contact Us” page)
