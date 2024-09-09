import Header from "@/components/admin/layout/Header";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  	return (
		<div className={`min-h-screen flex flex-col`}>
			<Header/>
			<main className="grow mt-20 md:mt-24">
				{children}
			</main>
		</div>
  	);
}
