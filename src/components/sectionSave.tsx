<section className="bg-white px-8 flex flex-wrap py-24">
    {articles.length > 0 && // BLog Section article cards, 4 cols @lg to @xl, 3 col @md and 2 @sm -------
        articles.map((article) => (
            <div
                className=" w-full sm:w-1/2 md:w-1/3 xl:w-1/4 px-4 pt-8 lg:pt-0"
                key={article.title}
            >
                <div className="shadow-md">
                    <FadeInUp>
                        {/* Article featured image --------------------------------*/}

                        <Link
                            href={`/post/${article.id}/${article.title
                                .split(" ")
                                .join("_")}`}
                            passHref
                        >
                            <img
                                src={`http://localhost:1337${article.image.url}`}
                                alt={article.title}
                            />
                        </Link>

                        {/* Article category --------------------------------------*/}

                        <div className="p-4">
                            <span className="text-xs font-light text-blue-600">
                                {article.category.name}
                            </span>

                            {/* Article title --------------------------------------*/}

                            <h2 className="font-bold">{article.title}</h2>

                            {/* Article short content text --------------------------------------*/}

                            <p className="text-sm pt-1">
                                {`${article.description.substr(0, 100)}`}
                                <a
                                    href="/page"
                                    className="text-blue-400 text-xs pt-2 block"
                                >
                                    {" "}
                                    Read more...
                                </a>
                            </p>

                            {/* Article Author Section --------------------------------------*/}

                            <div className="flex pt-3">
                                <img
                                    src={`http://localhost:1337${article.author.picture.url}`}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className="flex flex-col pl-1">
                                    <span className="text-xs">
                                        {article.author.name
                                            ? article.author.name
                                            : article.author.firstname +
                                              " " +
                                              article.author.lastname}
                                    </span>
                                    <span className="text-xs pt-1">
                                        {article.created_at
                                            .toString()
                                            .slice(0, 10)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </FadeInUp>
                </div>
            </div>
        ))}
</section>;
