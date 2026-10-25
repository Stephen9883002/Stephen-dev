import './style/VideoIntro.css';

function VideoIntro() {
	return (
		<section className="video-section">
			<div className="video-container">
				{/* Left Side: Copy */}
				<div className="video-copy">
					<span className="eyebrow">A quick introduction</span>
					<h2 className="section-title">A little more about me.</h2>
					<p className="video-desc">
						Add a short introduction video here when it’s ready. You can also
						include a resume link when you have a file or destination to share.
					</p>
					<a href="#resume" className="btn btn-outline resume-btn">
						<span className="material-icons-sharp">description</span>
						View Resume
					</a>
				</div>

				{/* Right Side: Video Placeholder */}
				<div className="video-player-wrapper">
					<div className="video-placeholder">
						<button className="play-button" aria-label="Play video">
							<span className="material-icons-sharp">play_arrow</span>
						</button>
						<span className="placeholder-text">
							Introduction Video Coming Soon
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default VideoIntro;
