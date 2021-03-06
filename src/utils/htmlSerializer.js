import { Elements } from 'prismic-reactjs';

export const htmlSerializer = (type, element, content, children, key) => {
	console.log(Elements)
	switch(type) {
		case Elements.paragraph:
			return element.text ? (
				<p className="content_paragraph">{children}</p>
			) : (
				<br/>
			);
	
		case Elements.oListItem:
			return (
				<li className="content_list_item">
					{children}
				</li>
			);

		case Elements.image:
			const { width, height } = element.dimensions;

			return (
				<div className="image_wrapper centered">
					<img 
						src={element.url} 
						alt={element.alt || ''}
						style={{
							width: width > height ? '100%' : 'auto',
							height: height > width ? '100%' : 'auto',
						}}
					/>
				</div>
			);
 
		case Elements.hyperlink:
			return (
				<a className="content_link" href={element.data.value.url} target={element.data.target || ""} rel="noopener noreferrer">{children}</a>
			);
   
		default:
			return null;
	}
};