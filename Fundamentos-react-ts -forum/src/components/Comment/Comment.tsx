import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';
import { IComentProps } from './IComentProps';


export function Comment({ content, onDeleteComment }: IComentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeletComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(() => {
            return likeCount + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/wellingtonC.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wellington Carvalho</strong>
                            <time title='30 de janeiro as 09:00' dateTime='2025-01-30 20:19:00'>Cerca de 1h atrás </time>
                        </div>
                        <button onClick={handleDeletComment} title="Deletar Comentario">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}