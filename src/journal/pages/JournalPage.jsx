import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPage = () => {

  const dispatch = useDispatch()
  const { isSaving, active } = useSelector(state => state.journal)


  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  

  return (
    <JournalLayout>
      {/* <Typography>Nulla ad ex aute eiusmod ut veniam reprehenderit sit ex sunt ut elit non amet. Do qui amet ullamco sint exercitation fugiat officia. Ad incididunt minim ipsum irure. Ut ex anim ullamco labore. Laboris est qui veniam sunt eiusmod adipisicing voluptate anim.</Typography> */}

      {
        (!!active)
          ? <NoteView />
          : <NothingSelectedView />
      }

      <IconButton
        onClick={onClickNewNote}
        size="large"
        disabled={isSaving}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>
    </JournalLayout>
  )
}
