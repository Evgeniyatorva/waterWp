<?php get_header(); ?>
		<main class="art section-color_blue main-margin">
			<div class="container">
				<div class="row">
						
						<?php
						$id = 3; //category
						$posts_blog = new WP_Query(array('cat' => $id, 'posts_per_page' => 100));
						?>

						<?php if ($posts_blog->have_posts() ) : ?>
							<div class="articles__item">
						<?php while ($posts_blog->have_posts() ) :$posts_blog->the_post(); ?>
							<div class="article articles__margin">
								<a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
								<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
								<p><?php the_excerpt(); ?></p>
								<time><?php the_time('j F Y'); ?></time>
								<a class="button" href="<?php the_permalink(); ?>">Читать далее</a>
							</div>	
						<?php endwhile; ?>
							</div>
						<?php else: ?>
						<?php endif; ?>
																			
				</div>
			</div>			
		</main>


<?php get_footer(); ?>