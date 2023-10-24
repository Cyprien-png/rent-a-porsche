# Mockups

You can view the application design on [figma](https://www.figma.com/file/P0TBPjOzcI4tStCMmu7rLL/Rent-a-Porsche?type=design&node-id=0-1&mode=design&t=H5ye6W0xJBUDFohK-0) or directly from the proto app to get a realistic rendering using the following link: [figma proto link](https://www.figma.com/proto/P0TBPjOzcI4tStCMmu7rLL/Rent-a-Porsche?type=design&node-id=1-3&t=5efIahimiUDIUmzj-0&scaling=scale-down&page-id=0%3A1).

## Navigation

From [figma](https://www.figma.com/file/P0TBPjOzcI4tStCMmu7rLL/Rent-a-Porsche?type=design&node-id=0-1&mode=design&t=H5ye6W0xJBUDFohK-0), you can use the right panel and click on "Prototype" to get an overview of the navigation between the pages.

Please note that, to be more consistent with the specifications, an admin interface has been added to allow for more content (especially forms) to be added. Therefore, when clicking on the "login" button on the "Login-mobile" page, it displays the home page as if the user had logged in as an admin.

## Design and Colors

According to the analysis, the following color palette has been respected in the design.

![Color Palette](https://coolors.co/000000-a3acb3-f4f4f4-9d0620-f8cd02)

Given that the application has a dark theme, the first contrasting color is red and is often used with shadows of the same color to evoke the Porsche brand signature due to its famous LED headlights.

![LED Image](./images/led.jpg)

Yellow is used as the second contrasting color to highlight components with specific functionalities as well as the entire admin interface.

# Code

Not all views have been coded. The following are viewable:

- Home (admin or not)
- Login
- Register
- New car
- Account
- Search (location and vehicle)

## Structure

The routes are located at the root in the "App.jsx" file. This file determines which view will be rendered to the user.

The views are all located in `src/pages` and refer to components in `src/components`.

Knowing that many of my components repeated in my designs, I decided to leverage React by creating "reusable components," saving time and making my code more lightweight.

## Navigation

### Admin

Similarly to the mockup, the forms are not functional (except for vehicle search). Therefore, when you click on the login button on the login page, you will automatically be logged in as an administrator.

Once logged in, the "user" icon in the top right corner of the screen allows access to the user's profile. From this view, you can log out if needed.

### href?

If you look at the code a bit, you'll notice that for navigation, I use `<a></a>` tags without an `href` attribute. Navigation is done using the `onClick` option on the tags with a `useNavigate` hook. I made this choice because using `href` causes an unnecessary site reload (it prolongs the transition between pages and creates a white flash on mobile), whereas `useNavigate` changes the route without having to reload everything.

\<a href="/login">|\<a onClick={navigate("/register")}>
:-------------------------:|:-------------------------:
![href](./images/href.gif) |![href](./images/onClick.gif)


## Responsive

The application has been coded to be used on mobile. Although in general there should be no visualization issues on large screens, it is possible that the experience may not be optimal.

A large majority of the elements in the application use flexbox or grids.

```html
 <div className='flex justify-between items-text-Porsche-gray'>
```
```html
<div className='grid grid-cols-1 gap-6'>
```