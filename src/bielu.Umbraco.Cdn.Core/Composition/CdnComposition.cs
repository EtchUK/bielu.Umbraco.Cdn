﻿using bielu.Umbraco.Cdn.Core.NotitificationHandlers.Content;
using bielu.Umbraco.Cdn.Core.NotitificationHandlers.Domain;
using bielu.Umbraco.Cdn.Core.NotitificationHandlers.Media;
using bielu.Umbraco.Cdn.Core.NotitificationHandlers.Tree;
using bielu.Umbraco.Cdn.Core.Services;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Web.BackOffice.Trees;
using Umbraco.Extensions;

namespace bielu.Umbraco.Cdn.Core.Composition
{
    public class CdnComposition : IComposer
    {
        public void Compose(IUmbracoBuilder composition)
        {
            //services
            composition.Services.AddTransient(typeof(IUmbracoUrlDeliveryService), typeof(UmbracoUrlDeliveryService));

            //content
            composition
                .AddNotificationAsyncHandler<ContentMovingNotification,ContentEventsNotificationNotificationHandler>()
                .AddNotificationAsyncHandler<ContentSavedNotification,ContentEventsNotificationNotificationHandler>()
                .AddNotificationAsyncHandler<ContentDeletingNotification,ContentEventsNotificationNotificationHandler>()
                .AddNotificationAsyncHandler<ContentUnpublishingNotification,ContentEventsNotificationNotificationHandler>()
                .AddNotificationAsyncHandler<ContentPublishingNotification,ContentEventsNotificationNotificationHandler>()
                .AddNotificationAsyncHandler<ContentPublishedNotification,ContentEventsNotificationNotificationHandler>()
                .AddNotificationAsyncHandler<ContentUnpublishedNotification,ContentEventsNotificationNotificationHandler>();
        
            //domain
            composition
                .AddNotificationAsyncHandler<DomainSavedNotification,DomainEventNotificationNotificationHandler>() 
                .AddNotificationAsyncHandler<DomainDeletedNotification,DomainEventNotificationNotificationHandler>();
            //media
            composition
                .AddNotificationAsyncHandler<MediaSavedNotification,MediaEventsNotificationNotificationHandler>();
            //Menu
            composition
                .AddNotificationAsyncHandler<MenuRenderingNotification,TreeRenderingNotification>();
        }
    }
    
}