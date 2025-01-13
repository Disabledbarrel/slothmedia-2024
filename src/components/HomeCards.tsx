import Card from "./Card";

const HomeCards = () => {
	return (
		<section className="py-4">
			<div className="container-xl lg:container m-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
					<Card
						title="For Developers"
						subtitle="Browse our React jobs and start your career today"
						href="/jobs.html"
						linkText="Browse Jobs"
						bgColor="bg-gray-100"
						linkClass="bg-black text-white hover:bg-gray-700"
					/>
					<Card
						title="For Employers"
						subtitle="List your job to find the perfect developer for the role"
						href="/add-job.html"
						bgColor="bg-indigo-100"
						linkClass="bg-indigo-500 text-white hover:bg-indigo-600"
						linkText="Add Job"
					/>
				</div>
			</div>
		</section>
	);
};

export default HomeCards;
