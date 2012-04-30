Adaptive Image JS (jQuery Plugin)
============================

**The script adds basic adaptive image support for browsers. It helps you allow image assets to be dynamically swapped in and out via basic Media Querys**  

WHY SHOULD I USE THIS?
---------------------------------------------

Responsive layouts are the new and big thing in web design, when a website is designed to be responsive it can dynamically resize itself to fit on a mobile phone using new techniques available in CSS3. The video and audio tags can also similarly be written in html to load different sized ad quality content depending on the screen size and device. However the img has still not been updated, so mobiles are still forced to download full desktop sized resolution images, the images simply cannot adapt as it isn't part of the HTML Spec yet. Whilst there are proposals for this to happen, no browser implements it and most current solutions rely on a backend server. Adaptive Image JS provides a simple easy to use library with a fallback for browsers without Javascript.

HOW TO USE ADAPTIVE IMAGE JS
--------------------------------------------------

**Add your image**

All images you wish to be adaptive should be post-fixed with the adaptive namespace. For example:

	<img:adaptive src="animage.png" />

You should provide a default source for this tag (you can provide a media query for this tag if you wish). Then inside this tag place any alternative versions you want to use along with the media queries in a media attribute. For example: 

	<img:adaptive src="Low-Res.png" media = "only screen and (max-width: 820px)">
		<source src="High-Res.png" media = "only screen and (min-width: 1100px)"/>
	</img:adaptive>

Finally if you wish to provide a fallback for browsers without javascript then insert a standard img like you would normally bellow the alternative sources:

<img:adaptive src="Low-Res.png" media = "only screen and (max-width: 820px)">
		<source src="High-Res.png" media = "only screen and (min-width: 1100px)"/>
		<img src="Fallback.png"/>
	</img:adaptive>

**Add the Javascript**

Then add the javascript into the body of the document

	<script type="text/javascript" src="adaptiveimages.js" />

Limitations
---------

The script only supports the Media Queries max-width, min-width in px units combined with the keyword 'and' ('or' is not supported).</li>
	<li>Although you can mix media types with and without a Media Query in one stylesheet (i.e.: media="only screen and (max-width: 480px), handheld") or multiple media types with one or more media queries (i.e.: media="only screen and (min-width: 1025px) and (max-width: 1600px), only projection and (min-width: 1025px) and (max-width: 1600px)"), you can not use multiple media types with multiple different Media Queries (i.e.: media="only screen and (min-width: 1025px), only projection and (min-width: 1200px)" &lt;- this will fail). To achieve this you have to add another link.

Demo
____

* View a demo: <http://www.jscampbellis.me/Misc/Adaptive-Images/>

Download
________

* ZIP File: <https://github.com/jcampbell05/Adaptive-Images/zipball/master>


CHANGELOG
---------

* **1.0** (30/04/2012)
  * First release


LICENSE
-------

  _Copyright (C) 2010-2012, James Campbell & Alexander Farkas_  

	_Licensed under **BSD Opensource License** (free for personal and commercial use)_
