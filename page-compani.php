<?php
/*
 * Template name: компания
 */
?>

<?php get_header(); ?>
		<main class="page main-margin">
			<div class="container">
				<div class="row">
					<?php if (have_posts() ) : while (have_posts() ) : the_post(); ?>
					<h2><?php the_title(); ?></h2>
					<?php the_post_thumbnail(); ?>
					<?php the_content(); ?>
										<?php endwhile; ?>

					<?php else: ?>
					<?php endif; ?>	


				</div>
			</div>
		</main>


<?php get_footer(); ?>