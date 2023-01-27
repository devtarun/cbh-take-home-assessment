# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### 1: Add custom Agent ID field to Agent table
* Acceptance Criteria: A new field called "custom_id" is added to the Agent table in the database that can hold a string value
* Time/Effort Estimate: 0.5 hour
* Implementation Details: Alter the table and add custom_id column of varchar type and default it to null.

### 2: Allow Facilities to set custom Agent IDs
* Acceptance Criteria: A new endpoint is added to the API that allows Facilities to set a custom ID for any Agent they work with
* Time/Effort Estimate: 2 hours
* Implementation Details: Create a new endpoint that accepts a Facility ID, Agent ID, and custom ID value, and updates the custom_id field for the specified Agent in the database.

### 3: Use custom Agent IDs in report generation
* Acceptance Criteria: The generateReport function is updated to use the custom Agent ID, if present, instead of the internal database ID when generating reports for Facilities
* Time/Effort Estimate: 1 hour
* Implementation Details: Update the generateReport function to check if custom_id is not null, if it's not null use it in the report otherwise use internal id.

### 4: Test and validate the feature
* Acceptance Criteria: Test the feature by creating some facilities, agents and shifts, setting custom ids and generating reports to ensure that it's working as expected.
* Time/Effort Estimate: 2 hour
* Implementation Details: Create test cases for different scenarios and validate that the feature is working as expected.

### 5: Deploy the feature
* Acceptance Criteria: The feature is deployed to production and is accessible to all users
* Time/Effort Estimate: 0.5 hour
* Implementation Details: Deploy the feature to the production environment and make sure it's accessible to all users.