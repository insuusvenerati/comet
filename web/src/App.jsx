import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import Routes from '@/pages/Routes'
import { Provider as UrqlProvider } from 'urql'
import { urqlClient } from '@/graphql/urqlClient'
import ResponsiveToaster from '@/components/ui/ResponsiveToaster'
import CustomDragLayer from '@/components/ui/CustomDragLayer'
import ContextMenus from '@/components/ui/context/ContextMenus'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <UrqlProvider value={urqlClient}>
        <DndProvider
          backend={TouchBackend}
          options={{ enableTouchEvents: false, enableMouseEvents: true }}
        >
          <ResponsiveToaster />
          <CustomDragLayer />
          <ContextMenus />
          <div className={`h-full max-h-full`}>
            <Routes />
          </div>
        </DndProvider>
      </UrqlProvider>
    </BrowserRouter>
  )
}
