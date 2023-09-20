import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs"
import MainLayout from "../../components/MainLayout"
import { images } from "../../constants";
import SuggestedPost from "./container/SuggestedPost";

const ArticleDetailsPage = () => {
    const breadCrumbsData =[
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
        { name: "Article title", link: '/blog/1' },
      ];

      const postsData = [
        {
            _id: "1",
            image:images.post1,
            title: 'Article title Article title',
            createdAt: "1 Jan 2023"
        },
        {
            _id: "2",
            image:images.post1,
            title: 'Article title Article title',
            createdAt: "1 Jan 2023"
        },
        {
            _id: "3",
            image:images.post1,
            title: 'Article title Article title',
            createdAt: "1 Jan 2023"
        },
        {
            _id: "4",
            image:images.post1,
            title: 'Article title Article title',
            createdAt: "1 Jan 2023"
        },
      ];

      const tagsData = [
        'Medical',
        'Article',
        'Clothes',
        'Technicals',
        'Publications',
        'authors',
        'contributors',
        'publisher'
      ];

  return (
    <MainLayout>
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5">
            <article className="flex-1">
                <BreadCrumbs data={breadCrumbsData} />
                <img className="rounded-xl w-full" src={images.post1} alt="image" />
                <Link to='/' className="text-primary text-sm font-roboto inline-block md:text-base mt-4">
                    Category
                </Link>
                <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                 React Js is Awsome and Better than Html
            </h1>
            <div className="mt-4 text-dark-soft">
                <p className="leading-7">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!  Animi fugiat recusandae sed blanditiis, nulla optio dignissimos id molestias qui ipsum!
                </p>
            </div>
            </article>
            <SuggestedPost header="Latest Articles" posts={postsData} tags={tagsData} />
        </section>
    </MainLayout>
  )
}

export default ArticleDetailsPage