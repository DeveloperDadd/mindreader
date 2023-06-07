# Mind Reader #

**This project will take a user through storing a number in their head, doing basic math functions in their head as prompted by the SPA, and finally retrieving a symbol which should match to the corresponding number the user has in their head. The purpose of this project is for students to gain experience manipulating state in JS. Reading this pseudocode should walk a user through how the script will work before executing the code in a live environment**

## ***CREATE HTML ELEMENTS*** ##
 * Use the DOM to create h1, two buttons, and paragraph elements. The contents inside will change based on the program and further DOM manipulation. 
 * Assign ID's to each specific element for CSS stying and for further DOM manipulation (manipulating strings)

## ***VARIABLES*** ## 

**state**
 * Will be an array of objects. 
    * Each object will represent a page 
    * Each page object will have a value (i.e. 'page number' : 1) an h1 element displaying text, a button to move forward, a button to go to the last step, and some paragraph text helping the user go through the prompts
    **Example of page object content:**
    ```
     let state = [{'pageNumber' : 1,
        'h1Text' : '',
        'nxtBtn: '',
        'backBtn: '',
        'paragraph' : '',
        }, ...]
    ```
    <br>
**nextBtn**
  * When clicked will invoke a **FUNCTION** that *increments* to the next value in the array, or the next page.
  * Will change display to show all new text and buttons, if different, of the current step.
  <br>
**backBtn**
  * When clicked will invoke a **FUNCTION** that *decrements* to the previous value in the array, or the previous page.
  * Will change display to show all the previous text and buttons.


## ***FUNCTIONS*** ##

**FUNCTION INIT()** <br>
    - When page loads automatically display the first object in the state array <br>
      --  THEN wait for user input for the program to proceed <br>
        ---    **END**
<br>

**FUNCTION nextPage()** <br>
    - User CLICK's nextBtn, use event listener 'click' to invoke function <br>
       -- Array INCREMENTS to next index which should display the next page <br>
          ---  THEN wait for next user input <br>
               ----   END<br>
                
**FUNCTION prevPage()** <br>
    - User CLICK's backBtn, use event listener 'click' to invoke function <br>
       -- Array DECREMENTS to previous index which should display the previous page content <br>
           --- THEN wait for next user input <br>
              ----  END<br>


## ***FUNCTIONALITY*** ##

**START** <br>
  *INIT()* <br>
  *nextPage() or prevPage() depending on which button user clicks* <br>
  *When user reaches index 5 of the array (page 6) that is the end of the program*<br>
**END**

  
