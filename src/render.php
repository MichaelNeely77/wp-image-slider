<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

function render_image_slider_block( $attributes ) {
	if( empty( $attributes['images'] ) ) {
		return '';
	}
	$images = $attributes['images'];
	$duration = isset( $attributes['transitionDuration'] ) ? $attributes['transitionDuration'] : 3000;

	ob_start();
?>
<div class="wp-image-slider" data-trasition-direction="<?php echo esc_attr( $duration ) ?>">
	<?php foreach ($images as $image) : ?>
		<img src="<?php echo esc_url($image['url']); ?>" alt="">
	<?php endforeach ?>

</div>
<?php
	return ob_get_clean();
}

register_block_type('image-slider/slider', array(
		'render_callback' => 'render_image_slider_block',
) );

