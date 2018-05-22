<?php get_header(); ?>

		<main class="page main-margin">
			<div class="container">
				<div class="row">
					<div class="breadcrumbs">
						<ul>
							<li><a href="<?php echo home_url(); ?>">Главная</a></li>
							<li><a href="<?php echo get_category_link($cat[0]->cat_ID); ?>"><?php the_category(','); ?></a></li>
							<li><a href="#"><?php the_title(); ?></a></li>
						</ul>
					</div>
				</div>
				<div class="row">
					<div class="page__art">
					<?php if (have_posts() ) : while (have_posts() ) : the_post(); ?>
						<?php the_post_thumbnail(); ?>
						<h3><?php the_title(); ?></h3>
						<time><?php the_time('j F Y'); ?></time>
						<?php the_content(); ?>
					<?php endwhile; ?>

					<?php else: ?>
					<?php endif; ?>				
						
						
					</div>
				</div>
			</div>
		</main>


<?php get_footer(); ?>