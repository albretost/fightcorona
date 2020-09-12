import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { IconButton } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import "./TentangKami.css";

function TentangKami() {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<div>
			<IconButton onClick={handleClick}>
				<InfoIcon className="header__icon" />
			</IconButton>
			<Modal
				open={open}
				onClose={handleClick}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<div className="modal">
					<div className="modal__header">
						<span className="modal__title">Tentang Kami</span>
						<IconButton onClick={handleClick}>
							<CloseIcon fontSize="small" />
						</IconButton>
					</div>
					<p className="modal__content">
						Selamat datang di aplikasi Fight Corona. Didalam aplikasi ini memuat
						sistem informasi, pencegahan dan diagnosa diri sendiri tentang virus
						COVID-19. Aplikasi ini dikembangkan oleh mahasiswa dari Universitas
						Palangka Raya dalam rangka mengikuti lomba Gemastik 13 dengan cabang
						lomba Rekayasa Perangkat Lunak.
					</p>
				</div>
			</Modal>
		</div>
	);
}

export default TentangKami;
