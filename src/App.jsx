import { useState } from 'react'
import { ProfileCard } from './ProfileCard'
import './App.css'

const profiles = [
    { name: '侍健太', age: 37, bio: 'プロジェクトマネージャー。チームの進捗管理と課題解決が得意です。' },
    { name: '刀沢彩香', age: 32, bio: 'フルスタックエンジニア。新規サービスの設計から運用まで担当しています。' },
    { name: '戦国広志', age: 24, bio: '若手バックエンドエンジニア。Node.jsでAPI開発に挑戦中です。' },
    { name: '武士山美咲', age: 27, bio: 'UI/UXデザイナー。使いやすく美しいデザインを追求しています。' },
    { name: '武者小路勇気', age: 29, bio: 'フロントエンドエンジニア。ReactとTypeScriptを使って開発中です。' }
];

function App() {
    const [index, setIndex] = useState(0);
    //クリック時、状態変更
    const handleClick = () => {
        if (index === profiles.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };
    return (
        <>
            <ProfileCard {...profiles[index]} />

            <button onClick={() => setIndex((index + 1) % profiles.length)}>
                次のプロフィール
            </button>
        </>
    );
}

export default App
