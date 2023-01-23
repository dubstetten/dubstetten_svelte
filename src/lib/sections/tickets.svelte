<script lang="ts">
    import background from "$lib/assets/img/fb_header.jpg";

    import { onMount } from "svelte";
    const settings = {
        headers: {
            Authorization: "Bearer ",
        },
    };
    type Ticket = {
        free: number;
        total: number;
    };
    let tickets: Ticket;
    onMount(async () => {
        tickets = await fetch(
            "https://www.eventbriteapi.com/v3/events/509314502387/capacity_tier/",
            settings
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                return {
                    free: data.capacity_total - data.capacity_sold,
                    total: data.capacity_total,
                };
            });
    });
</script>

<section id="tickets">
    <div id="background">
        <img src={background} alt="Dubstetten Event" />
    </div>

    <h3 class="title">Tickets</h3>
    <p>
        What the Bot say: Sure! Here's a revised version of the text with a
        focus on a dub event: "Hey there Dub Fans! Are you ready to experience
        the best in Dub music? We've got a fantastic lineup of artists and DJs
        at our upcoming Dub event, and you won't want to miss out. From heavy
        bass to smooth grooves, our Dub event will have you dancing all night
        long. And with our discounted ticket prices, it's the perfect
        opportunity to bring your friends and make some new ones on the dance
        floor. Don't wait too long to get your tickets - they're sure to go
        fast. We can't wait to welcome you to our Dub event and bring the vibes
        together. See you on the dance floor!"
    </p>
    <hr />
    {#if tickets}
        {#if tickets.free > 0}
            <p>
                <span class="free-tickets">{tickets.free}</span> Tickets left
                from total available
                <span class="total-tickets">{tickets.total} </span>Weekendpasses
            </p>
            <a
                href="https://www.eventbrite.com/e/dubstetten-tickets-509314502387"
                class="btn">Order Tickets</a
            >
        {:else}
            Sorry we are solde out.
        {/if}
    {/if}
</section>

<style>
    #tickets {
    }
    #background {
        position: fixed;
        bottom: 0;
        right: 0;
        opacity: 0.4;
    }
    #background img {
        --background-size: 200vw;
        width: var(--lp-size);
        height: var(--lp-size);
    }
    .free-tickets {
        color: darkgreen;
        font-weight: bold;
    }
    .total-tickets {
        color: darkslategray;
    }
</style>
