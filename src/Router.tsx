import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Blog } from './pages/Blog'
import { PostDetail } from './pages/PostDetail'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="" element={<Blog />}></Route>
        <Route path="/:id" element={<PostDetail />}></Route>
      </Route>
    </Routes>
  )
}