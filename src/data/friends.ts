// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "松坂有希",
		imgurl: "https://avatars.githubusercontent.com/u/225602409",
		desc: "The world is big, you have to go and see",
		siteurl: "https://blog.mysqil.com",
		tags: ["Technique", "Blog"],
	},
	{
		id: 2,
		title: "菲兹克斯喵",
		imgurl: "https://physnya.top/images/Physics_nya.jpg",
		desc: "Eclipse first, the rest nowhere.",
		siteurl: "https://physnya.top/",
		tags: ["Bangumi", "Study", "Blog"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
