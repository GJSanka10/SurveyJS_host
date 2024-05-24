// src/components/SurveyComponent.js
import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import AddressAutocomplete from './AddressAutocomplete';

const SurveyComponent = () => {
  const surveyJson = useMemo(() => ({
    title: "Product Feedback Survey",
    description: "Please fill out this survey about our product.",
    pages: [
      {
        "name": "page1",
        "elements": [
         {
          "type": "panel",
          "name": "panel1",
          "elements": [
           {
            "type": "dropdown",
            "name": "question1",
            "title": "Title:",
            "hideNumber": true,
            "isRequired": true,
            "errorLocation": "bottom",
            "choices": [
             {
              "value": "Item 1",
              "text": "BROTHER"
             },
             {
              "value": "Item 2",
              "text": "CAPTAIN"
             },
             {
              "value": "Item 3",
              "text": "DAME"
             },
             {
              "value": "Item 4",
              "text": "DR"
             },
             {
              "value": "Item 5",
              "text": "FATHER"
             },
             {
              "value": "Item 6",
              "text": "MAJOR"
             },
             {
              "value": "Item 7",
              "text": "MR"
             },
             {
              "value": "Item 8",
              "text": "MISS"
             },
             {
              "value": "Item 9",
              "text": "MRS"
             },
             {
              "value": "Item 10",
              "text": "MS"
             },
             {
              "value": "Item 11",
              "text": "SIR"
             },
             {
              "value": "Item 12",
              "text": "SISTER"
             }
            ]
           },
           {
            "type": "text",
            "name": "question2",
            "title": "Patient's Given name/s:",
            "hideNumber": true,
            "errorLocation": "bottom",
            "placeholder": "Please provide details"
           },
           {
            "type": "text",
            "name": "question3",
            "title": "Patient's Second Name:",
            "hideNumber": true,
            "errorLocation": "bottom",
            "placeholder": "Please provide details"
           },
           {
            "type": "text",
            "name": "question4",
            "title": "Patient's Surname:",
            "hideNumber": true,
            "errorLocation": "bottom",
            "placeholder": "Please provide details"
           },
           {
            "type": "text",
            "name": "question39",
            "title": "Previous Surname:",
            "hideNumber": true,
            "placeholder": "Please provide details"
           },
           {
            "type": "text",
            "name": "question28",
            "title": "Preferred Name:",
            "hideNumber": true,
            "placeholder": "Please provide details"
           },
           {
            "type": "text",
            "name": "question5",
            "title": "Date of birth:",
            "hideNumber": true,
            "inputType": "date"
           },
           {
            "type": "text",
            "name": "question40",
            "title": "Age:",
            "hideNumber": true,
            "inputType": "number"
           },
           {
            "type": "dropdown",
            "name": "Gender",
            "title": "Gender:",
            "hideNumber": true,
            "choices": [
             {
              "value": "Item 1",
              "text": "MALE"
             },
             {
              "value": "Item 2",
              "text": "FEMALE"
             },
             {
              "value": "Item 3",
              "text": "OTHER"
             }
            ]
           },
           {
            "type": "text",
            "name": "question17",
            "visibleIf": "{Gender} = 'Item 3'",
            "titleLocation": "hidden",
            "hideNumber": true,
            "placeholder": "Specify Other"
           },
           {
            "type": "text",
            "name": "question7",
            "title": "Address:",
            "hideNumber": true
           },
           {
            "type": "boolean",
            "name": "Can't find your address",
            "title": "Can't find your address ?",
            "titleLocation": "left",
            "hideNumber": true,
            "swapOrder": true
           },
           {
            "type": "text",
            "name": "UnitNo",
            "visibleIf": "{Can't find your address} = true",
            "title": "Unit No/Apartment No/Street No:",
            "hideNumber": true,
            "placeholder": "Unit No|Apartment No|Street No:"
           },
           {
            "type": "text",
            "name": "Street Name:",
            "visibleIf": "{Can't find your address} = true",
            "title": "Street Name:",
            "hideNumber": true,
            "placeholder": "Street Name"
           },
           {
            "type": "expression",
            "name": "question11",
            "visibleIf": "{Can't find your address} = true",
            "title": "Suburb/State/Postcode:",
            "hideNumber": true
           },
           {
            "type": "text",
            "name": "question12",
            "visibleIf": "{Can't find your address} = true",
            "minWidth": "200px",
            "titleLocation": "hidden",
            "hideNumber": true,
            "placeholder": "Suburb"
           },
           {
            "type": "text",
            "name": "question13",
            "visibleIf": "{Can't find your address} = true",
            "minWidth": "200px",
            "startWithNewLine": false,
            "titleLocation": "hidden",
            "placeholder": "State"
           },
           {
            "type": "text",
            "name": "question14",
            "visibleIf": "{Can't find your address} = true",
            "minWidth": "200px",
            "startWithNewLine": false,
            "titleLocation": "hidden",
            "hideNumber": true,
            "placeholder": "Post Code"
           },
           {
            "type": "text",
            "name": "question15",
            "visibleIf": "{Can't find your address} = true",
            "minWidth": "200px",
            "startWithNewLine": false,
            "titleLocation": "hidden",
            "placeholder": "Country"
           },
           {
            "type": "text",
            "name": "question8",
            "title": "Mobile number:",
            "hideNumber": true,
            "inputType": "tel",
            "placeholder": "XXXX XXX XXX"
           },
           {
            "type": "text",
            "name": "question16",
            "title": "Email",
            "hideNumber": true,
            "inputType": "email",
            "placeholder": "myname@example.com"
           },
           {
            "type": "dropdown",
            "name": "question6",
            "title": "Marital Status:",
            "hideNumber": true,
            "choices": [
             {
              "value": "Item 1",
              "text": "Not Stated"
             },
             {
              "value": "Item 2",
              "text": "De Facto"
             },
             {
              "value": "Item 3",
              "text": "Married"
             },
             {
              "value": "Item 4",
              "text": "Separated"
             },
             {
              "value": "Item 5",
              "text": "Divorced"
             },
             {
              "value": "Item 6",
              "text": "Widowed"
             },
             {
              "value": "Item 7",
              "text": "Single"
             }
            ]
           },
           {
            "type": "text",
            "name": "question18",
            "title": "Occupation:",
            "hideNumber": true,
            "placeholder": "Please provide details"
           },
           {
            "type": "boolean",
            "name": "question20",
            "title": "Are you an Australian resident?",
            "titleLocation": "left",
            "hideNumber": true
           },
           {
            "type": "dropdown",
            "name": "question22",
            "title": "Country of Birth:",
            "hideNumber": true,
            "choices": [
             "Item 1",
             "Item 2",
             "Item 3"
            ],
            "choicesByUrl": {
             "url": "https://countriesnow.space/api/v0.1/countries",
             "path": "data"
            }
           },
           {
            "type": "text",
            "name": "question9",
            "title": "State of Birth",
            "hideNumber": true,
            "placeholder": "Please provide details"
           },
           {
            "type": "matrix",
            "name": "question23",
            "titleLocation": "hidden",
            "hideNumber": true,
            "columns": [
             "YES",
             "NO",
             "DECLINE TO ANSWER"
            ],
            "rows": [
             {
              "value": "Row 1",
              "text": "Are you (is this person) of Aboriginal or Torres Strait Islander origin?"
             }
            ]
           },
           {
            "type": "checkbox",
            "name": "question25",
            "useDisplayValuesInDynamicTexts": false,
            "visibleIf": "{question23.Row 1} = 'YES'",
            "titleLocation": "hidden",
            "hideNumber": true,
            "isRequired": true,
            "choices": [
             {
              "value": "Item 1",
              "text": "YES ABORIGINAL"
             },
             {
              "value": "Item 2",
              "text": "YES TORRES STRAIT ISLANDER"
             },
             {
              "value": "Item 3",
              "text": "YES BOTH ABORIGINAL AND TORRES STRAIT ISLANDER"
             }
            ],
            "colCount": 3
           },
           {
            "type": "dropdown",
            "name": "question26",
            "title": "Language Spoken at Home:",
            "hideNumber": true,
            "choices": [
             "Item 1",
             "Item 2",
             "Item 3"
            ],
            "placeholder": "Search"
           },
           {
            "type": "text",
            "name": "question10",
            "title": "Do you have any Cultural Requirements that you would like observed ?",
            "hideNumber": true,
            "placeholder": "Please provide details"
           },
           {
            "type": "boolean",
            "name": "question19",
            "title": "Will you require an interpreter on day of surgery?",
            "hideNumber": true
           },
           {
            "type": "boolean",
            "name": "question21",
            "title": "Advanced care directive:",
            "hideNumber": true,
            "swapOrder": true
           },
           {
            "type": "text",
            "name": "question27",
            "visibleIf": "{question21} = true",
            "title": "Details",
            "hideNumber": true,
            "placeholder": "Please provide details"
           }
          ],
          "title": "1.Personal Details",
          "state": "expanded"
         }
        ]
       },
      {
        name: "page2",
        elements: [
          
          {
            type: "panel",
            name: "panel1",
            elements: [
              {
                "type": "expression",
                "name": "question33",
                "title": "Next of Kin"
               },
               {
                "type": "text",
                "name": "sure_name1",
                "title": "Name:          ",
                "hideNumber": true,
                "placeholder": "Surname"
               },
               {
                "type": "text",
                "name": "given_name1",
                "startWithNewLine": false,
                "title": "  ",
                "hideNumber": true,
                "placeholder": "Given Name"
               },
               {
                "type": "dropdown",
                "name": "relationship1",
                "title": "Relationship",
                "hideNumber": true,
                "choices": [
                 {
                  "value": "Item 1",
                  "text": "Father"
                 },
                 {
                  "value": "Item 2",
                  "text": "Mother"
                 },
                 {
                  "value": "Item 3",
                  "text": "Brother"
                 },
                 {
                  "value": "Item 4",
                  "text": "Sister"
                 },
                 {
                  "value": "Item 5",
                  "text": "Sopuse"
                 },
                 {
                  "value": "Item 6",
                  "text": "Friend"
                 },
                 {
                  "value": "Item 7",
                  "text": "Child"
                 },
                 {
                  "value": "Item 8",
                  "text": "Other"
                 }
                ]
               },
               {
                "type": "text",
                "name": "mobile1",
                "title": "Mobile:         ",
                "hideNumber": true,
                "inputType": "tel",
                "placeholder": "XXXX XXX XXX"
               },
               {
                "type": "text",
                "name": "email1",
                "title": "E-mail:           ",
                "hideNumber": true,
                "inputType": "email",
                "placeholder": "Enter the Email here"
               },
               {
           "type": "panel",
           "name": "panel2",
           "elements": [
            {
              type: "html",
              name: "address1",
              html: "<div id='address-autocomplete-container'></div>"
            },
            {
             "type": "panel",
             "name": "question43",
             "elements": [
              {
               "type": "text",
               "name": "apartment_no1",
               "title": "Unit No / Apartment No / Street No:",
               "hideNumber": true,
               "placeholder": "Unit No | Apartment No | Street No:"
              },
              {
               "type": "text",
               "name": "streat_name1",
               "title": "Street Name:",
               "hideNumber": true,
               "placeholder": "Street Name"
              },
              {
               "type": "text",
               "name": "suburb1",
               "title": "Suburb",
               "hideNumber": true,
               "placeholder": "Suburb"
              },
              {
               "type": "text",
               "name": "state1",
               "startWithNewLine": false,
               "title": " ",
               "hideNumber": true,
               "placeholder": "State"
              },
              {
               "type": "text",
               "name": "post_code1",
               "startWithNewLine": false,
               "title": " ",
               "hideNumber": true,
               "placeholder": "Post Code"
              }
             ],
             "title": "Unable to locate the specified address in the 'Google Address Search', Please fill the address below ",
             "state": "collapsed"
            }
           ]
          },
              
            ]
          }
        ]
      }
    ]
  }), []);

  const survey = useMemo(() => new Model(surveyJson), [surveyJson]);

  // Hook to render address autocomplete component after question rendering
  useEffect(() => {
    survey.onAfterRenderQuestion.add((survey, options) => {
      if (options.question.name === 'address1') {
        const container = document.getElementById('address-autocomplete-container');
        if (container) {
          // Render your AddressAutocomplete component
          ReactDOM.render(<AddressAutocomplete />, container);
        }
      }
    });
  }, [survey]);

  // Function to handle survey completion
  const handleSurveyComplete = async (result) => {
    const response = result.data;
    try {
      // Send survey response to your server
      const res = await fetch('http://localhost:5000/api/survey-responses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(response),
      });
      const data = await res.json();
      console.log('Survey response saved:', data);
    } catch (error) {
      console.error('Error saving survey response:', error);
    }
  };

  // Assign handleSurveyComplete function to survey onComplete event
  survey.onComplete.add(handleSurveyComplete);

  // Render the Survey component
  return <Survey.Survey model={survey} />;
};

export default SurveyComponent;