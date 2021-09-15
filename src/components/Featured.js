import React from 'react'
import { Articles } from './Articles';
import"./css/Featured.css";
import image5 from "./asserts/images/image5.jpg";
import image6 from "./asserts/images/image6.png";
import image7 from "./asserts/images/image7.jpeg";
import image8 from "./asserts/images/image8.jpg";
import image9 from "./asserts/images/image9.png";
import image10 from "./asserts/images/image10.png";
import image11 from "./asserts/images/image11.jpg";
import image12 from "./asserts/images/image12.jpg";
import image13 from "./asserts/images/image13.jpg";

export const Featured = () => {
    return (
        <div className="main_container">
            <div className="featured_container">
            <div className="featured">
                <div className="heading">
                FEATURED SPOTLIGHTS
                </div>
            </div>
            <div className="articles">
            <Articles image={image5} heading="VIDEO" subheading="MARC KASOWITZ" maindesc="Founding partner Marc E. Kasowitz speaks about Kasowitz Benson Torres LLP." btn_name="Marc E. Kasowitz" playbtn="PLAY MERC'S VIDEO" />

            <Articles image={image6} heading="MEDIA" subheading="DECEMBER 03, 2020" maindesc="Kasowitz Secures Trial Victory In Long-Standing RMBS Put-Back Action for MBIA Insurance" desc="In a decision issued on November 30, 2020, Justice Jennifer G. Schecter of the Supreme Court of New York, New York County, has held that, during a two-week bench trial capping over ten years of litigation, Kasowitz Benson Torres, on behalf of client MBIA Insurance, proved that Credit Suisse breached its representations and warranties to MBIA concerning a failed residential mortgage-backed securitization Credit Suisse sponsored and MBIA guaranteed and is liable to MBIA for damages, which we expect will amount to over even the $680 million Credit Suisse itself has acknowledged." btn_name="View article" />

            <Articles image={image7} heading="VIDEO" subheading="CAPABILITIES" maindesc="Kasowitz partners speak about our capabilities and thoughtfully aggressive approach." btn_name="Capabilities" playbtn="PLAY CAPABILITIES VIDEO"/>

            <Articles image={image8} heading="VIDEO" subheading="PEOPLE" maindesc="Meet some of our highly competent and effective team. Working for our clients. Always." playbtn="PLAY PEOPLE VIDEO"/>

            <Articles image={image6} heading="MEDIA" subheading="NOVEMBER 02, 2020" maindesc="Kasowitz Wins Dismissal of Claims against Owners of Historic Hotel Chelsea Seeking to Halt Renovations" desc="Kasowitz Benson Torres, on behalf of the owners of the iconic Hotel Chelsea in Manhattan, has secured the dismissal of a lawsuit brought by two tenants of a neighboring townhouse they lease from the owners seeking injunctive relief halting all renovation of the historic property and asserting claims for breach of warranty of habitability, private nuisance and harassment." btn_name="View article" />

            <Articles image={image9} heading="VIEWPOINTS" subheading="JANUARY 05, 2021" maindesc="Webinar: Mandating Covid-19 Tests and Vaccines in the Workplace: Legal Issues and Liability Risks" desc="Kasowitz Benson Torres employment litigation partners Mark W. Lerner and Jessica Taub Rosenberg will be presenting “Mandating Covid-19 Tests and Vaccines in the Workplace: Legal Issues and Liability Risks,” a webinar hosted by Practising Law Institute." btn_name="View article"/>

            <Articles image={image10} heading="MEDIA" subheading="MAY 07, 2021" maindesc="Kasowitz Announces Law Firm Fundraising Drive to Address India’s Covid-19 Crisis" desc="Kasowitz Benson Torres partner Jay R. Deshmukh, head of Kasowitz’s Hatch-Waxman team, is spearheading a fundraising drive seeking law firm and lawyer contributions to Americares’ India Covid-19 response effort.  Kasowitz is contributing $15,000, and individual Kasowitz lawyers are contributing as well." btn_name="View article" />

            <Articles image={image11} heading="CASE STUDY" subheading="LITIGATION
" maindesc="Kasowitz Quickly and Successfully Resolves Astra Asset Management’s Abacus CDO Claims Against Goldman Sachs on the Eve of Trial" desc="Kasowitz represented Astra Asset Management, a London investment firm, in a trust instruction proceeding concerning Abacus 2006-10, a synthetic $543 million CMBS-linked CDO created by Goldman Sachs." btn_name="View more" />

            <Articles image={image12} heading="MEDIA" subheading="MEDIA
APRIL 12, 2021" maindesc="Leading Intellectual Property Journal Managing IP Names Jonathan K. Waldrop California IP Practitioner of the Year" desc="Managing IP Americas has awarded Jonathan K. Waldrop, partner and head of the Intellectual Property group at Kasowitz Benson Torres, the 2021 California Practitioner of the Year in Litigation Award." btn_name="View article" />

            <Articles image={image13} heading="MEDIA" subheading="JUNE 01, 2020" maindesc="Kasowitz Ranked Among Top 20 Most Diverse Leading Law Firms by American Lawyer" desc="Kasowitz Benson Torres has again been ranked as among the twenty most diverse leading law firms by The American Lawyer.  Kasowitz is ranked #18 on the publication’s annual Diversity Scorecard listing." btn_name="View article"/>
            </div>
            </div>
        </div>
    )
}
