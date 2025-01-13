interface CardProps {
	title: string;
	subtitle: string;
	href: string;
	linkText: string;
	bgColor: string;
	linkClass: string;
}

const Card: React.FC<CardProps> = ({
	title,
	subtitle,
	href,
	linkText,
	bgColor,
	linkClass,
}) => {
	return (
		<div className={`${bgColor} p-6 rounded-lg shadow-md`}>
			<h2 className="text-2xl font-bold">{title}</h2>
			<p className="mt-2 mb-4">{subtitle}</p>
			<a
				href={href}
				className={`inline-block rounded-lg px-4 py-2 ${linkClass}`}
			>
				{linkText}
			</a>
		</div>
	);
};

export default Card;
