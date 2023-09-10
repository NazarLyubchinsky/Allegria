import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const Collection = () => {

	const { t } = useTranslation();


	return (
		<section className="collection">
			<div className="collection__content">
				<div className="collection__left">
					<h2 className={`collection__left-title`} dangerouslySetInnerHTML={{ __html: t("collection.title") }} />

					<p className={`collection__left-desc`}>
						{t("collection.subtitleLeft")}
					</p>
					<Link to={'/catalog'} className="collection__left-link">
						{t("collection.link")}
					</Link>
				</div>
				<div className="collection__right">
					<div className="collection__right-box">
						<div className="collection__right-blockImg">
							<p className="collection__right-text">
								{t("collection.subtitleRight")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Collection;