import multer from "multer";

export const fileUploader = () => {
	const storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, "uploads/");
		},
		filename: function (req, file, cb) {
			const uniqueSuffix =
				Date.now() + "-" + Math.round(Math.random() * 1e9);
			cb(null, file.originalname + "-" + uniqueSuffix);
		},
	});

	const upload = multer({ storage: storage });

	return upload;
};
