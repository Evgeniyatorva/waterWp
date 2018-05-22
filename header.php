<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
	<title><?php bloginfo('name'); ?></title>
	<?php wp_head(); ?>
</head>
<body>
	<div class="wrapper">
		<header class="header">
			<div class="header__container-bar">
				<div class="progress-bar" id="bar"></div>
			</div>
			<div class="container">
				<div class="row">
					<div class="hamburger-menu"></div>
					<div class="header__logo">
						<a href="<?php echo home_url(); ?>"><img width="293" height="40" src="<?php echo get_template_directory_uri() ?> /img/Logo.png" alt="logo"></a>
					</div>
					<div class="header__phone">
						<a href="#">+375291023066</a>
						<a href="#">+375292364009</a>
					</div>
				</div>				
				<div class="row">					
					<nav class="header__menu">
						<?php if(!dynamic_sidebar('menu_header')): ?>
						<?php endif;?>
<!-- 						<ul>
							<li><a href="index.html">Главная</a></li>
							<li><a href="#advantage">Достижения</a></li>
							<li><a href="#action">Заказать</a></li>
							<li><a href="#">О компании</a></li>
							<li><a href="article.html">Статьи</a></li>
						</ul> -->
					</nav>
				</div>
			</div>
		</header>