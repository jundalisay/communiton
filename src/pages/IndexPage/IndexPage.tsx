import { For, Show, createSignal, type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Link } from '@/components/Link/Link.js';
import { Page } from '@/components/Page/Page.js';
import { routes } from '@/navigation/routes.js';

import './IndexPage.css';


export const IndexPage: Component = () => {
  return (
    <Page title="List Iems">
      <p>
        This page is a home page in this boilerplate. You can use the links below to visit other
        pages with their own functionality.
      </p>
      <ul class="index-page__links">
        <For each={routes}>
          {(route) => (
            <Show when={route.title}>
              <li class="index-page__link-item">
                <Link class="index-page__link" href={route.path}>
                  <Show when={route.Icon}>
                    {(Icon) => (
                      <i class="index-page__link-icon">
                        <Dynamic component={Icon()}/>
                      </i>
                    )}
                  </Show>
                  {route.title}
                </Link>
              </li>
            </Show>
          )}
        </For>
      </ul>
    </Page>
  );
};



// function StringList() {
//   const [items, setItems] = createSignal(["Item 1", "Item 2", "Item 3"])

//   return (
//     <ul>
//       <input
//         type="text"
//         onInput={(e) => {
//           // add the new item to the list
//         }}
//       />
//       <For each={items()}>
//         {(item, index) => (
//           <li>
//             {item} - {index()}
//           </li>
//         )}
//       </For>
//     </ul>
//   )
// }




// import { Component, For, Show } from 'solid-js';
// import { createSignal } from 'solid-js';

// // Types for our list items
// type Status = 'active' | 'completed' | 'pending' | 'failed';

// interface ListItem {
//   id: string | number;
//   title: string;
//   description?: string;
//   status?: Status;
//   avatar?: string;
//   tags?: string[];
//   timestamp?: string;
// }

// interface ListProps {
//   items: ListItem[];
//   onItemClick?: (item: ListItem) => void;
//   onItemDelete?: (id: string | number) => void;
//   showStatus?: boolean;
//   showTags?: boolean;
// }

// // Status badge component
// const StatusBadge: Component<{ status: Status }> = (props) => {
//   const getStatusStyles = (status: Status) => {
//     const baseStyles = "px-2 py-1 rounded-full text-xs font-medium";
//     const statusStyles = {
//       active: "bg-green-100 text-green-800",
//       completed: "bg-blue-100 text-blue-800",
//       pending: "bg-yellow-100 text-yellow-800",
//       failed: "bg-red-100 text-red-800"
//     };
//     return `${baseStyles} ${statusStyles[status]}`;
//   };

//   return (
//     <span class={getStatusStyles(props.status)}>
//       {props.status.charAt(0).toUpperCase() + props.status.slice(1)}
//     </span>
//   );
// };

// // Tag component
// const Tag: Component<{ text: string }> = (props) => (
//   <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
//     {props.text}
//   </span>
// );

// // Main List component
// const List: Component<ListProps> = (props) => {
//   const [selectedId, setSelectedId] = createSignal<string | number | null>(null);

//   const handleItemClick = (item: ListItem) => {
//     setSelectedId(item.id);
//     props.onItemClick?.(item);
//   };

//   const handleDelete = (e: Event, id: string | number) => {
//     e.stopPropagation();
//     props.onItemDelete?.(id);
//   };


//   return (
//     <div class="w-full max-w-3xl mx-auto">
//       <ul class="divide-y divide-gray-200">
//         <For each={props.items}>
//           {(item) => (
//             <li 
//               class={`
//                 p-4 hover:bg-gray-50 transition-colors duration-150
//                 ${selectedId() === item.id ? 'bg-gray-50' : ''}
//                 cursor-pointer
//               `}
//               onClick={() => handleItemClick(item)}
//             >
//               <div class="flex items-start justify-between">
//                 <div class="flex items-start space-x-4">
//                   <Show when={item.avatar}>
//                     <div class="flex-shrink-0">
//                       <img
//                         src={item.avatar}
//                         alt=""
//                         class="h-10 w-10 rounded-full"
//                       />
//                     </div>
//                   </Show>
                  
//                   <div class="min-w-0 flex-1">
//                     <div class="flex items-center justify-between">
//                       <p class="text-sm font-medium text-gray-900">
//                         {item.title}
//                       </p>
//                       <Show when={item.timestamp}>
//                         <p class="text-xs text-gray-500">
//                           {item.timestamp}
//                         </p>
//                       </Show>
//                     </div>
                    
//                     <Show when={item.description}>
//                       <p class="mt-1 text-sm text-gray-500">
//                         {item.description}
//                       </p>
//                     </Show>

//                     <Show when={props.showTags && item.tags?.length}>
//                       <div class="mt-2 flex flex-wrap gap-2">
//                         <For each={item.tags}>
//                           {(tag) => <Tag text={tag} />}
//                         </For>
//                       </div>
//                     </Show>
//                   </div>
//                 </div>

//                 <div class="flex items-center space-x-4">
//                   <Show when={props.showStatus && item.status}>
//                     <StatusBadge status={item.status!} />
//                   </Show>
                  
//                   <button
//                     onClick={(e) => handleDelete(e, item.id)}
//                     class="text-gray-400 hover:text-gray-500 focus:outline-none"
//                   >
//                     <svg
//                       class="h-5 w-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </li>
//           )}
//         </For>
//       </ul>
//     </div>
//   );
// };

// // Example usage
// const App: Component = () => {
//   const items: ListItem[] = [
//     {
//       id: 1,
//       title: "Complete project proposal",
//       description: "Draft and review the Q2 project proposal document",
//       status: "completed",
//       tags: ["Documentation", "Planning"],
//       timestamp: "2h ago",
//       avatar: "/api/placeholder/40/40"
//     },
//     {
//       id: 2,
//       title: "Team meeting",
//       description: "Weekly sync with development team",
//       status: "active",
//       tags: ["Meeting", "Team"],
//       timestamp: "1h ago",
//       avatar: "/api/placeholder/40/40"
//     },
//     {
//       id: 3,
//       title: "Code review",
//       description: "Review pull request #123",
//       status: "pending",
//       tags: ["Development", "Review"],
//       timestamp: "30m ago",
//       avatar: "/api/placeholder/40/40"
//     }
//   ];

//   const handleItemClick = (item: ListItem) => {
//     console.log("Clicked item:", item);
//   };

//   const handleItemDelete = (id: string | number) => {
//     console.log("Delete item:", id);
//   };

//   return (
//     <div class="p-6">
//       <List
//         items={items}
//         onItemClick={handleItemClick}
//         onItemDelete={handleItemDelete}
//         showStatus={true}
//         showTags={true}
//       />
//     </div>
//   );
// };

// export default App;