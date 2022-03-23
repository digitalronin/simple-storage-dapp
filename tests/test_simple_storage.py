from brownie import SimpleStorage
from scripts.utils import get_account


def test_stores_initial_message():
    msg = "Hello, World!"
    account = get_account()
    ss = SimpleStorage.deploy(msg, {"from": account})
    assert (ss.message() == msg)


def test_updates_message():
    account = get_account()
    ss = SimpleStorage.deploy("Hello, World!", {"from": account})
    ss.update("New message", {"from": account})
    assert (ss.message() == "New message")
