// 유튜브 썸네일 추출 함수
export function getYoutubeThumbnail(url: string) {
  // embed, watch 등 다양한 형태 지원
  const match = url.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([\w-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : undefined;
}
