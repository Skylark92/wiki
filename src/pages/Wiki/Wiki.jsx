import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WikiContent from "../../components/Wiki/WikiContent";
import WikiEdit from "../../components/Wiki/WikiEdit";
import WikiRelated from "../../components/Wiki/WikiRelated";
import WikiTitle from "../../components/Wiki/WikiTitle";
import { WikiListContext } from "../../context/WikiListContext";

export default function Wiki() {
  const { wikiList } = useContext(WikiListContext);
  const [data, setData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();

  const startEditing = () => {
    setIsEditing(true);
  }

  const closeEditing = () => {
    setIsEditing(false);
  }

  useEffect(() => {
    for (const wiki of wikiList) {
      if (String(wiki.id) === id) setData(wiki);
      else continue;
    }
  }, [wikiList, id])

  return (
    <div className="wiki-container">
      {isEditing ? <WikiEdit
        data={data}
        closeEditing={closeEditing}
      /> : (
        <>
          <WikiTitle title={data?.title} onClick={startEditing} />
          <WikiContent data={data} />
          <WikiRelated data={data} />
        </>
      )}
    </div>
  )
}
