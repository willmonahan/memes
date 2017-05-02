# Memes Project Outline
Drawing on the Web Final Project

I have taken my original README project outline, and moved it to a file called outline.md
Please refer to that file to find the original project outline.

## Themes
For this project, I tried to focus on internet meme culture, and incorporate the ridiculous nature of viral online content, and the unbelievable volume it appears online. My drawings ended up being kind of silly, but they're all drawn using p5 and the HTML Canvas, and I'm proud of the procedural generation techniques I developed during this project.

## Salad
There was recently a trend on the subreddit /r/me_irl where users were photoshopping salads into stock images. This meme made no sense, but I found it hysterical, and I decided to give a go at generating these images on my website.
This drawing draws from a number of salad images and stock photos to randomly choose a combination and place the salad on the screen. I wrote my own code to position the photo in the center of the page without distorting, and I found that when I placed the salad randomly in the bottom third of the screen, it produced really hilarious results.

## Dat Boi
Dat Boi is another popular internet meme, which gained popularity last year. It is quite possibly one of the most popular individual memes of all time, but it's fairly simple as it just features an image of a frog on a unicycle. I took this meme, and I created a program to add instances of the image to the screen, and animate them riding together as a troop.
It was a challenge to add instances of dat boi onto the screen and keep track of all of them, while translating their position incrimentally, but I think I found an elegant solution by appending instances of the image to an array.
I also really liked the streaky look that the image paths left behind, so I decided not to remove them. I think it looks really fun!

## Cats
My third drawing is based on the phenomenon of cats online, which is something that has remained popular for a long time on the internet. This drawing also incorporated the random generation element of the salad project, while using procedural techniques from the dat boi project to add instances of cats to the page.
The code uses an array to randomly choose from a list of potential cats, and it appends these cats to a master array which tracks the cats onscreen.
The main drawback of this program is the fact that as it loads more cats on the screen, the strain on the computer and the processor increases greatly. The program slows down noticeably on my laptop after about 30 seconds. I need to figure out a way to let the cats disappear after a while, so as not to keep using processing power updating hundreds of cats at a time.

## Navigation
My navigation page is made using simple <div> tags and CSS styling. I just really love the gradient look, and I wanted to use lightweight CSS to create interactivity which was simple, but impressive and fun to use. The design I settled on is simple and most importantly scalable, so it looks great on any browser window size and shape, and translates fantastically to mobile.