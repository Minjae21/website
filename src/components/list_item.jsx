const ListItem = () => {
    return (
        <div id="listItem" className="listHead">
            <p className="bio">
                <div id="about"></div>
                <h2 id="listHeader" className="bioHead">
                    About Me
                </h2>
                Hi 👋 I&apos;m Minjae. I&apos;m a software engineer, looking to apply my knowledge and experiences to interesting problems in the world.
                My current interests are Artificial Intelligence, Machine Learning, databases and software development.
                I will be graduating in May 2026 and I&apos;m looking for internship/new grad opportunities.

                <div className="section">
                    <img className="logo" src="uiuc.png" alt="uiuc-logo" />
                    <div className="sectionName-container">
                        <a href="https://illinois.edu/" target="_blank" className="sectionName">University of Illinois Urbana-Champaign</a>
                        <p className="sectionDetail">Computer Science</p>
                        <p className="sectionBio">I&apos;m currently in my junior year of Computer Science at the University of Illinois Urbana-Champaign.
                            I&apos;m taking interesting courses such as Artificial Intelligence, Algorithms, Database Systems, Models of Computation, and Software Development.
                        </p>
                    </div>
                    <div className="sectionDate">May 2026</div>
                </div>

                <div className="section">
                    <img className="logo" src="country.jpeg" alt="country-logo" />
                    <div className="sectionName-container">
                        <a href="https://www.linkedin.com/company/countryfinancial/" target="_blank" className="sectionName">COUNTRY Financial</a>
                        <p className="sectionDetail">Software Engineer Intern | Champaign, IL</p>
                        <p className="sectionBio">
                            Building cool stuff
                        </p>

                        <a href="#" className="expBtn"><span>
                            My Experience</span>
                        </a>
                    </div>
                    <div className="sectionDate">May 2025 - Present</div>
                </div>

                <div className="section">
                    <img className="logo" src="carle.png" alt="carle-logo" />
                    <div className="sectionName-container">
                        <a href="https://medicine.illinois.edu/" target="_blank" className="sectionName">Carle Illinois Collge of Medicine</a>
                        <p className="sectionDetail">Software Engineer | Champagin, IL</p>
                        <p className="sectionBio">Working on an AI-driven system with diagnostic algorithms to speed up overall algorithms and adding new features such as an AI bot.
                        </p>

                        <a href="#" className="expBtn"><span>
                            My Experience</span>
                        </a>
                    </div>
                    <div className="sectionDate">Oct 2024 - Present</div>
                </div>

                <div className="section">
                    <img className="logo" src="mycritters.png" alt="mycritters-logo" />
                    <div className="sectionName-container">
                        <a href="#" target="_blank" className="sectionName">MyCritters</a>
                        <p className="sectionDetail">Software Engineer Intern | Chicago, IL</p>
                        <p className="sectionBio">MyCritters is a healthcare startup providing software products for pet owners.
                        </p>

                        <a href="#" className="expBtn"><span>
                            My Experience</span>
                        </a>
                    </div>
                    <div className="sectionDate">May - Aug 2024</div>
                </div>

                <div className="section">
                    <img className="logo" src="scholarship.jpeg" alt="scholarship-logo" />
                    <div className="sectionName-container">
                        <a href="#" target="_blank" className="sectionName">Scholarship Auditions</a>
                        <p className="sectionDetail">Software Engineer Intern | Nashville, TN</p>
                        <p className="sectionBio">Scholarship Auditions is an EdTech startup focused on connecting high school students and college recruiters.
                        </p>

                        <a href="#" className="expBtn"><span>
                            My Experience</span>
                        </a>
                    </div>
                    <div className="sectionDate">May - Aug 2023</div>
                </div>

                <div className="section">
                    <img className="logo" src="blockchain.png" alt="blockchain-logo" />
                    <div className="sectionName-container">
                        <a href="https://illiniblockchain.com/" target="_blank" className="sectionName">Illini Blockchain</a>
                        <p className="sectionDetail">Software Engineer | Champaign, IL</p>
                        <p className="sectionBio">Working on Web3 and blockchain-based software solutions at Illini Blockchain.
                        </p>

                        <a href="#" className="expBtn"><span>
                            My Experience</span>
                        </a>
                    </div>
                    <div className="sectionDate">Oct 2024 - Present</div>
                </div>

                <h2 id="listHeader" className="bioHeadP">
                    <div id="projects"></div>
                    Projects
                </h2>
                <div className="containerP">
                    <div className="sectionP">
                        <a href="https://github.com/Minjae21/PartyMode" target="_blank" className="sectionNameP">PartyMode</a>
                        <img className="sleeplogo" src="partymode.png" alt="partymode" />
                        <div className="sectionName-container">
                            <p className="sectionBio">
                                🏆 UIUC Research Park 2025 Hackathon Winner (1st Place)<br></br><br></br>
                                PartyMode is a real-time collaborative music queue app built for events, parties, and gatherings - all powered by Spotify Web API.
                            </p>
                        </div>
                    </div>

                    <div className="sectionP">
                        <a href="https://github.com/Minjae21/WildRisk-AI" target="_blank" className="sectionNameP">WildRisk AI</a>
                        <img style={{
                            width: '450px',
                            borderRadius: '10px',
                        }} src="wildfire-map.png" alt="uiuc-logo" />
                        <div className="sectionName-container">
                            <p className="sectionBio">WildRisk AI is an AI-powered software that provides hyper-local wildfire risk predictions, explanations of contributing factors, and interactive visualizations of wildfire risk.
                            </p>
                        </div>
                    </div>

                    <div className="sectionP">
                        <a href="https://fantastic-madeleine-2f6761.netlify.app/" target="_blank" className="sectionNameP">Tile Master</a>
                        <img className="tilelogo" src="tilegame.png" alt="tile game" />
                        <div className="sectionName-container">
                            <p className="sectionBio">Tile Master is a fun and challenging tile-matching game where players aim to clear the board by matching tiles in strategic ways before the time runs out.
                            </p>
                        </div>
                    </div>
                    <div className="sectionP">
                        <a href="https://dailyillini.com/" target="_blank" className="sectionNameP">The Daily Illini</a>
                        <img className="dailylogo" src="daily.png" alt="uiuc-logo" />
                        <div className="sectionName-container">
                            <p className="sectionBio">The Daily Illini website serves as a digital platform for student journalism, offering news, articles, and updates about campus events and student life.
                            </p>
                        </div>
                    </div>
                </div>
            </p>
        </div>
    );
};

export default ListItem;