// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	iPhone: [
		{
			name: "iPhone 16 Pro",
			image: "/images/device/iphone-16-pro.png",
			specs: "Desert Titanium / 512GB",
			description:
				"Titanium design, Latest-generation Ceramic Shield front, Textured matte glass back",
			link: "https://support.apple.com/en-us/121031",
		},
	],
	iPad: [
		{
			name: "iPad Pro 11‑inch (M4)",
			image: "/images/device/ipad-pro-11-inch.png",
			specs: "Space Black / 256GB",
			description:
				"The ultimate iPad experience with the most advanced technology.",
			link: "https://support.apple.com/en-us/119892",
		},
	],
	Macbook: [
		{
			name: "MacBook Pro",
			image: "/images/device/mbp14-silver2.png",
			specs: "Silver / 8-core CPU / 14-core GPU / 16GB / 1TB",
			description: "Game-changing MacBook Pro",
			link: "https://support.apple.com/en-us/111902",
		},
	],
};
