# Caption with Number

## Goal

When you create a html document with images and captions numbered, 
if you add another image in the document's middle you have to rearrange all the images and references to them.
This project tries to resolve this problem with captions and references. 

## How does it work?

Each caption have an id, that can be *'the_image_that_shows_something'*. All the references to the image have a href to this id.
The default **name** of the numbers will be *Fig.*. 
The function in JQuery, change all the text of the references to images to the default name with the number. 
And it will add to every caption, also, the default name with the number.






