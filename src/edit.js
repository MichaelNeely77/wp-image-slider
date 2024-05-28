/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, MediaUPload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, RangeControl} from'@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { images, transitionDuration } = attributes;

	const onSelectImages = (newImages) => {
		setAttributes({ images: newImages.map((image) => ({ id: image.id, url:image.url})) });
	}

	const blockProps = useBlockProps;

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Slider Settings', 'image-slider')}>
					<ImageControl
						label={__('Transition Duration (ms)', 'image-slider')}
						value={transitionDuration}
						onChange={(value) => setAttributes({ transitionDuration: value})}
						min={1000}
						max={10000}
					/>
				</PanelBody>
			</InspectorControls>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectImages}
					allowedTypes={['image']}
					multiple
					gallery
					value={iamges.map((img) => img.id)}
					render={({open}) => (
						<Button onClick={open} className="button button-large">
							{!images.length ? __('Upload IMages', 'image-slider') : __('Edit Images', 'images-slider')}
						</Button>
					)}
				/>
			</MediaUploadCheck>
			<div className="slider-preview">
				{images.length ? images.map((img) => (
					<img key={img.id} src={img.url} alt="" />
					)) : __('No images selected', 'image-slider')}
			</div>
		</div>

	);
}
